/**
 * @typedef {object} TaxRateObject
 * @property {TaxRate[]} rates
 */

/**
 * @typedef {Object<string, TaxRateObject>} TaxRateForLocale
 */

/**
 * @typedef {Object<string, TaxRateForLocale>} TaxRateObjectByYear
 */

/**
 * @typedef {object} TaxRate
 * @property {number} limit
 * @property {number} rate
 */

/**
 * @param {number} taxableIncome
 * @param {TaxRateObject} taxRates
 */
export function calculateTax(taxableIncome, taxRates, deduction = 0) {
	if (!taxRates) {
		return 0; // If the state is not found, return 0 tax
	}

	const adjustedTaxableIncome = taxableIncome - deduction;

	const incomeInCents = Math.round(adjustedTaxableIncome * 100); // Convert taxable income to cents
	let taxAmount = 0;
	let remainingIncome = incomeInCents;

	for (const bracket of taxRates.rates) {
		if (remainingIncome <= 0) {
			break; // No more taxable income to calculate
		}

		const { limit, rate } = bracket;
		const limitInCents = Math.round(limit * 100); // Convert limit to cents
		const taxableInBracket = Math.min(remainingIncome, limitInCents);
		const bracketTax = Math.round(taxableInBracket * rate);
		taxAmount += bracketTax;
		remainingIncome -= taxableInBracket;
	}

	return taxAmount / 100; // Convert tax amount back to dollars
}

export const socialSecurityTaxRates = {
	2023: {
		rates: [
			{ limit: 160_200, rate: 0.062 },
			{ limit: Infinity, rate: 0 }
		]
	},
	2024: {
		rates: [
			{ limit: 168_600, rate: 0.062 },
			{ limit: Infinity, rate: 0 }
		]
	}
};

export const medicareTaxRates = {
	rates: [
		{ limit: 250000, rate: 0.0145 },
		{ limit: Infinity, rate: 0.0235 }
	]
};

export const federalTaxRatesMarriedFilingJointly = {
	693750: 37,
	462500: 35,
	364200: 32,
	190750: 24,
	89450: 22,
	22000: 12
};
export const standardDeductions = {
	2023: {
		joint: {
			federal: 27700,
			'New York': {
				state: 16050,
				city: 0
			},
			'New Jersey': {
				state: 0,
				city: 0
			}
		},
		single: {
			federal: 13850,
			'New York': {
				state: 8000,
				city: 0
			},
			'New Jersey': {
				state: 0,
				city: 0
			}
		}
	},
	2024: {
		joint: {
			federal: 29200,
			'New York': {
				state: 18000,
				city: 0
			},
			'New Jersey': {
				state: 0,
				city: 0
			}
		},
		single: {
			federal: 14600,
			'New York': {
				state: 8000,
				city: 0
			},
			'New Jersey': {
				state: 0,
				city: 0
			}
		}
	}
}; // Standard deduction for married couples filing jointly in 2023

export const formatAsCurrency = (/** @type {number | bigint} */ amount) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(amount);
};

/** @type {TaxRateObjectByYear} */
export const taxRatesFilingJointly = {
	2023: {
		'New York': {
			rates: [
				{ limit: 21_950, rate: 0.04 },
				{ limit: 45_200, rate: 0.045 },
				{ limit: 161_550, rate: 0.0525 },
				{ limit: 323_200, rate: 0.059 },
				{ limit: Infinity, rate: 0.0633 }
			]
		},
		'New Jersey': {
			rates: [
				{ limit: 20_000, rate: 0.014 },
				{ limit: 35_000, rate: 0.0175 },
				{ limit: 40_000, rate: 0.035 },
				{ limit: 75_000, rate: 0.05525 },
				{ limit: 150_000, rate: 0.0637 },
				{ limit: 500_000, rate: 0.0897 },
				{ limit: Infinity, rate: 0.1075 }
			]
		},
		Federal: {
			rates: [
				{ limit: 22_000, rate: 0.1 },
				{ limit: 89_450, rate: 0.12 },
				{ limit: 190_750, rate: 0.22 },
				{ limit: 364_200, rate: 0.24 },
				{ limit: 462_500, rate: 0.32 },
				{ limit: 693_750, rate: 0.35 },
				{ limit: Infinity, rate: 0.37 }
			]
		}
	}, // Tax rates for 2023
	2024: {
		'New York': {
			rates: [
				{ limit: 17150, rate: 0.04 },
				{ limit: 23600, rate: 0.045 },
				{ limit: 27900, rate: 0.0525 },
				{ limit: 161550, rate: 0.055 },
				{ limit: 323200, rate: 0.06 },
				{ limit: 2155350, rate: 0.0685 },
				{ limit: 5_000_000, rate: 0.0965 },
				{ limit: 25_000_000, rate: 0.103 },
				{ limit: Infinity, rate: 0.109 }
			]
		},
		'New Jersey': {
			rates: [
				{ limit: 20_000, rate: 0.014 },
				{ limit: 35_000, rate: 0.0175 },
				{ limit: 40_000, rate: 0.035 },
				{ limit: 75_000, rate: 0.05525 },
				{ limit: 150_000, rate: 0.0637 },
				{ limit: 500_000, rate: 0.0897 },
				{ limit: Infinity, rate: 0.1075 }
			]
		},
		Federal: {
			rates: [
				{ limit: 23_200, rate: 0.1 },
				{ limit: 94_300, rate: 0.12 },
				{ limit: 201_050, rate: 0.22 },
				{ limit: 383_900, rate: 0.24 },
				{ limit: 487_450, rate: 0.32 },
				{ limit: 731_200, rate: 0.35 },
				{ limit: Infinity, rate: 0.37 }
			]
		}
	}
};

/** @type {TaxRateObjectByYear} */
export const taxRatesFilingSingle = {
	2023: {
		'New York': {
			rates: [
				{ limit: 8500, rate: 0.04 },
				{ limit: 11700, rate: 0.045 },
				{ limit: 13900, rate: 0.0525 },
				{ limit: 80650, rate: 0.055 },
				{ limit: 215400, rate: 0.06 },
				{ limit: 1_077_550, rate: 0.0685 },
				{ limit: 5_000_000, rate: 0.0965 },
				{ limit: 25_000_000, rate: 0.103 },
				{ limit: Infinity, rate: 0.109 }
			]
		},
		'New Jersey': {
			rates: [
				{ limit: 20_000, rate: 0.014 },
				{ limit: 35_000, rate: 0.0175 },
				{ limit: 40_000, rate: 0.035 },
				{ limit: 75_000, rate: 0.05525 },
				{ limit: 150_000, rate: 0.0637 },
				{ limit: 500_000, rate: 0.0897 },
				{ limit: Infinity, rate: 0.1075 }
			]
		},
		Federal: {
			rates: [
				{ limit: 11_000, rate: 0.1 },
				{ limit: 44_725, rate: 0.12 },
				{ limit: 95_375, rate: 0.22 },
				{ limit: 182_100, rate: 0.24 },
				{ limit: 231_250, rate: 0.32 },
				{ limit: 346_875, rate: 0.35 },
				{ limit: Infinity, rate: 0.37 }
			]
		}
	}, // Tax rates for 2023
	2024: {
		'New York': {
			rates: [
				{ limit: 13_150, rate: 0.04 },
				{ limit: 21_400, rate: 0.045 },
				{ limit: 80_650, rate: 0.0525 },
				{ limit: 215_400, rate: 0.059 },
				{ limit: Infinity, rate: 0.0633 }
			]
		},
		'New Jersey': {
			rates: [
				{ limit: 20_000, rate: 0.014 },
				{ limit: 35_000, rate: 0.0175 },
				{ limit: 40_000, rate: 0.035 },
				{ limit: 75_000, rate: 0.05525 },
				{ limit: 150_000, rate: 0.0637 },
				{ limit: 500_000, rate: 0.0897 },
				{ limit: Infinity, rate: 0.1075 }
			]
		},
		Federal: {
			rates: [
				{ limit: 11_600, rate: 0.1 },
				{ limit: 47_150, rate: 0.12 },
				{ limit: 100_525, rate: 0.22 },
				{ limit: 191_950, rate: 0.24 },
				{ limit: 243_725, rate: 0.32 },
				{ limit: 609_350, rate: 0.35 },
				{ limit: Infinity, rate: 0.37 }
			]
		}
	}
};

export const taxRatesFilingSingle_City = {
	2023: {
		'New York': {
			rates: [
				{ limit: 12_000, rate: 0.03078 },
				{ limit: 25_000, rate: 0.03762 },
				{ limit: 50_000, rate: 0.03819 },
				{ limit: Infinity, rate: 0.03867 }
			]
		}
	},
	2024: {
		'New York': {
			rates: [
				{ limit: 12_000, rate: 0.03078 },
				{ limit: 25_000, rate: 0.03762 },
				{ limit: 50_000, rate: 0.03819 },
				{ limit: Infinity, rate: 0.03867 }
			]
		}
	}
};

export const taxRatesFilingJointly_City = {
	2023: {
		'New York': {
			rates: [
				{ limit: 21_600, rate: 0.03078 },
				{ limit: 45_000, rate: 0.03762 },
				{ limit: 90_000, rate: 0.03819 },
				{ limit: Infinity, rate: 0.03867 }
			]
		}
	},
	2024: {
		'New York': {
			rates: [
				{ limit: 21_600, rate: 0.03078 },
				{ limit: 45_000, rate: 0.03762 },
				{ limit: 90_000, rate: 0.03819 },
				{ limit: Infinity, rate: 0.03867 }
			]
		}
	}
};

export const safelySetLocalStorage = (key, value) => {
	if (typeof window === 'undefined') {
		return;
	}

	localStorage.setItem(key, value);
};
export const safelyGetLocalStorage = (key) => {
	if (typeof window === 'undefined') {
		return;
	}

	return localStorage.getItem(key);
};
