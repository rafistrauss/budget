import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
function calculateTax(taxableIncome, taxRates, deduction = 0) {
  if (!taxRates) {
    return 0;
  }
  const adjustedTaxableIncome = taxableIncome - deduction;
  const incomeInCents = Math.round(adjustedTaxableIncome * 100);
  let taxAmount = 0;
  let remainingIncome = incomeInCents;
  for (const bracket of taxRates.rates) {
    if (remainingIncome <= 0) {
      break;
    }
    const { limit, rate } = bracket;
    const limitInCents = Math.round(limit * 100);
    const taxableInBracket = Math.min(remainingIncome, limitInCents);
    const bracketTax = Math.round(taxableInBracket * rate);
    taxAmount += bracketTax;
    remainingIncome -= taxableInBracket;
  }
  return taxAmount / 100;
}
const socialSecurityTaxRates = {
  2023: {
    rates: [
      { limit: 160200, rate: 0.062 },
      { limit: Infinity, rate: 0 }
    ]
  },
  2024: {
    rates: [
      { limit: 168600, rate: 0.062 },
      { limit: Infinity, rate: 0 }
    ]
  },
  2025: {
    rates: [
      { limit: 176100, rate: 0.062 },
      { limit: Infinity, rate: 0 }
    ]
  },
  2026: {
    rates: [
      { limit: 176100, rate: 0.062 },
      { limit: Infinity, rate: 0 }
    ]
  }
};
const medicareTaxRates = {
  rates: [
    { limit: 25e4, rate: 0.0145 },
    { limit: Infinity, rate: 0.0235 }
  ]
};
const standardDeductions = {
  2023: {
    joint: {
      federal: 27700,
      "New York": {
        state: 16050,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    },
    single: {
      federal: 13850,
      "New York": {
        state: 8e3,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    }
  },
  2024: {
    joint: {
      federal: 29200,
      "New York": {
        state: 18e3,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    },
    single: {
      federal: 14600,
      "New York": {
        state: 8e3,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    }
  },
  2025: {
    joint: {
      federal: 3e4,
      "New York": {
        state: 18e3,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    },
    single: {
      federal: 15e3,
      "New York": {
        state: 8e3,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    }
  },
  2026: {
    joint: {
      federal: 3e4,
      "New York": {
        state: 18e3,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    },
    single: {
      federal: 15e3,
      "New York": {
        state: 8e3,
        city: 0
      },
      "New Jersey": {
        state: 0,
        city: 0
      }
    }
  }
};
const formatAsCurrency = (amount) => {
  if (amount == null || isNaN(Number(amount))) {
    return "$0.00";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
};
const taxRatesFilingJointly = {
  2023: {
    "New York": {
      rates: [
        { limit: 21950, rate: 0.04 },
        { limit: 45200, rate: 0.045 },
        { limit: 161550, rate: 0.0525 },
        { limit: 323200, rate: 0.059 },
        { limit: Infinity, rate: 0.0633 }
      ]
    },
    "New Jersey": {
      rates: [
        { limit: 2e4, rate: 0.014 },
        { limit: 35e3, rate: 0.0175 },
        { limit: 4e4, rate: 0.035 },
        { limit: 75e3, rate: 0.05525 },
        { limit: 15e4, rate: 0.0637 },
        { limit: 5e5, rate: 0.0897 },
        { limit: Infinity, rate: 0.1075 }
      ]
    },
    Federal: {
      rates: [
        { limit: 22e3, rate: 0.1 },
        { limit: 89450, rate: 0.12 },
        { limit: 190750, rate: 0.22 },
        { limit: 364200, rate: 0.24 },
        { limit: 462500, rate: 0.32 },
        { limit: 693750, rate: 0.35 },
        { limit: Infinity, rate: 0.37 }
      ]
    }
  },
  // Tax rates for 2023
  2024: {
    "New York": {
      rates: [
        { limit: 17150, rate: 0.04 },
        { limit: 23600, rate: 0.045 },
        { limit: 27900, rate: 0.0525 },
        { limit: 161550, rate: 0.055 },
        { limit: 323200, rate: 0.06 },
        { limit: 2155350, rate: 0.0685 },
        { limit: 5e6, rate: 0.0965 },
        { limit: 25e6, rate: 0.103 },
        { limit: Infinity, rate: 0.109 }
      ]
    },
    "New Jersey": {
      rates: [
        { limit: 2e4, rate: 0.014 },
        { limit: 35e3, rate: 0.0175 },
        { limit: 4e4, rate: 0.035 },
        { limit: 75e3, rate: 0.05525 },
        { limit: 15e4, rate: 0.0637 },
        { limit: 5e5, rate: 0.0897 },
        { limit: Infinity, rate: 0.1075 }
      ]
    },
    Federal: {
      rates: [
        { limit: 23200, rate: 0.1 },
        { limit: 94300, rate: 0.12 },
        { limit: 201050, rate: 0.22 },
        { limit: 383900, rate: 0.24 },
        { limit: 487450, rate: 0.32 },
        { limit: 731200, rate: 0.35 },
        { limit: Infinity, rate: 0.37 }
      ]
    }
  },
  2025: {
    "New York": {
      rates: [
        { limit: 17150, rate: 0.04 },
        { limit: 23600, rate: 0.045 },
        { limit: 27900, rate: 0.0525 },
        { limit: 161550, rate: 0.055 },
        { limit: 323200, rate: 0.06 },
        { limit: 2155350, rate: 0.0685 },
        { limit: 5e6, rate: 0.0965 },
        { limit: 25e6, rate: 0.103 },
        { limit: Infinity, rate: 0.109 }
      ]
    },
    "New Jersey": {
      rates: [
        { limit: 2e4, rate: 0.014 },
        { limit: 35e3, rate: 0.0175 },
        { limit: 4e4, rate: 0.035 },
        { limit: 75e3, rate: 0.05525 },
        { limit: 15e4, rate: 0.0637 },
        { limit: 5e5, rate: 0.0897 },
        { limit: Infinity, rate: 0.1075 }
      ]
    },
    Federal: {
      rates: [
        { limit: 23850, rate: 0.1 },
        { limit: 96950, rate: 0.12 },
        { limit: 206700, rate: 0.22 },
        { limit: 394600, rate: 0.24 },
        { limit: 501050, rate: 0.32 },
        { limit: 751600, rate: 0.35 },
        { limit: Infinity, rate: 0.37 }
      ]
    }
  },
  2026: {
    "New York": {
      rates: [
        { limit: 17150, rate: 0.04 },
        { limit: 23600, rate: 0.045 },
        { limit: 27900, rate: 0.0525 },
        { limit: 161550, rate: 0.055 },
        { limit: 323200, rate: 0.06 },
        { limit: 2155350, rate: 0.0685 },
        { limit: 5e6, rate: 0.0965 },
        { limit: 25e6, rate: 0.103 },
        { limit: Infinity, rate: 0.109 }
      ]
    },
    "New Jersey": {
      rates: [
        { limit: 2e4, rate: 0.014 },
        { limit: 35e3, rate: 0.0175 },
        { limit: 4e4, rate: 0.035 },
        { limit: 75e3, rate: 0.05525 },
        { limit: 15e4, rate: 0.0637 },
        { limit: 5e5, rate: 0.0897 },
        { limit: Infinity, rate: 0.1075 }
      ]
    },
    Federal: {
      rates: [
        { limit: 23850, rate: 0.1 },
        { limit: 96950, rate: 0.12 },
        { limit: 206700, rate: 0.22 },
        { limit: 394600, rate: 0.24 },
        { limit: 501050, rate: 0.32 },
        { limit: 751600, rate: 0.35 },
        { limit: Infinity, rate: 0.37 }
      ]
    }
  }
};
const taxRatesFilingJointly_City = {
  2023: {
    "New York": {
      rates: [
        { limit: 21600, rate: 0.03078 },
        { limit: 45e3, rate: 0.03762 },
        { limit: 9e4, rate: 0.03819 },
        { limit: Infinity, rate: 0.03867 }
      ]
    }
  },
  2024: {
    "New York": {
      rates: [
        { limit: 21600, rate: 0.03078 },
        { limit: 45e3, rate: 0.03762 },
        { limit: 9e4, rate: 0.03819 },
        { limit: Infinity, rate: 0.03867 }
      ]
    }
  },
  2025: {
    "New York": {
      rates: [
        { limit: 21600, rate: 0.03078 },
        { limit: 45e3, rate: 0.03762 },
        { limit: 9e4, rate: 0.03819 },
        { limit: Infinity, rate: 0.03867 }
      ]
    }
  },
  2026: {
    "New York": {
      rates: [
        { limit: 21600, rate: 0.03078 },
        { limit: 45e3, rate: 0.03762 },
        { limit: 9e4, rate: 0.03819 },
        { limit: Infinity, rate: 0.03867 }
      ]
    }
  }
};
const firebaseConfig = {
  apiKey: "AIzaSyC_wqKaOmHf0Nq31JOZtCt3pSQN_m1FOLk",
  authDomain: "budget-e231f.firebaseapp.com",
  projectId: "budget-e231f",
  storageBucket: "budget-e231f.appspot.com",
  messagingSenderId: "324153005171",
  appId: "1:324153005171:web:1a3196daf6a3b148b94606"
};
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  auth as a,
  taxRatesFilingJointly_City as b,
  calculateTax as c,
  db as d,
  socialSecurityTaxRates as e,
  formatAsCurrency as f,
  medicareTaxRates as m,
  standardDeductions as s,
  taxRatesFilingJointly as t
};
