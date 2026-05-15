import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape } from "./ssr.js";
import { b as base } from "./paths.js";
import { p as page } from "./stores.js";
import { w as writable } from "./index.js";
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
const safelySetLocalStorage = (key, value) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, value);
};
const safelyGetLocalStorage = (key) => {
  if (typeof window === "undefined") {
    return;
  }
  return localStorage.getItem(key);
};
function applyDarkModeToDocument(value) {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark-mode", value);
  }
}
function createDarkModeStore() {
  const initialDarkMode = (() => {
    const stored = safelyGetLocalStorage("darkMode");
    if (stored != null) {
      return stored === "true";
    }
    return typeof window !== "undefined" && (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false);
  })();
  const { subscribe: subscribe2, set, update } = writable(initialDarkMode);
  applyDarkModeToDocument(initialDarkMode);
  return {
    subscribe: subscribe2,
    toggle: () => {
      update((current) => {
        const next = !current;
        safelySetLocalStorage("darkMode", String(next));
        applyDarkModeToDocument(next);
        return next;
      });
    },
    set: (value) => {
      set(value);
      safelySetLocalStorage("darkMode", String(value));
      applyDarkModeToDocument(value);
    }
  };
}
const darkMode = createDarkModeStore();
const css = {
  code: "html, body{margin:0;padding:0;box-sizing:border-box}:root{--color-bg:#f4f6fa;--color-surface:#fff;--color-text-primary:#1a1d23;--color-text-secondary:#7a8099;--color-text-tertiary:#9ba3b5;--color-text-muted:#888;--color-text-light:#444;--color-border:#d0d5e0;--color-border-light:#e5e8f0;--color-bg-light:#f9fafb;--color-bg-lighter:#eef0f6;--color-accent-blue:#4f86c6;--color-accent-orange:#e07b54;--color-accent-green:#2e8b57;--color-accent-red:#c0392b;--color-accent-purple:#8b6bbf;--color-accent-cyan:#4db8b0;--color-accent-blue-light:#eef4ff;--color-accent-blue-border:#c3d8f7;--color-auth-border:#ccc;--color-sidebar-bg:#1e2130;--color-sidebar-text:#c8cdd8;--color-sidebar-border:#2e3348;--color-sidebar-hover:#2b2f42;--color-sidebar-active:#2e3a5c}html.dark-mode,.dark-mode{--color-bg:#0f1117;--color-surface:#161b22;--color-text-primary:#e6edf3;--color-text-secondary:#8b949e;--color-text-tertiary:#6e7681;--color-text-muted:#6e7681;--color-text-light:#c9d1d9;--color-border:#30363d;--color-border-light:#21262d;--color-bg-light:#0d1117;--color-bg-lighter:#1c2128;--color-accent-blue:#58a6ff;--color-accent-orange:#fb8500;--color-accent-green:#3fb950;--color-accent-red:#f85149;--color-accent-purple:#d291ff;--color-accent-cyan:#39c5cf;--color-accent-blue-light:#1f3a5f;--color-accent-blue-border:#2d5fa8;--color-auth-border:#444;--color-sidebar-bg:#0d1117;--color-sidebar-text:#c9d1d9;--color-sidebar-border:#21262d;--color-sidebar-hover:#1c2128;--color-sidebar-active:#1f6feb}.sidebar.svelte-1jo3udc{box-sizing:border-box;width:200px;flex-shrink:0;background:var(--color-sidebar-bg);color:var(--color-sidebar-text);display:flex;flex-direction:column;padding:1.25rem 0;position:fixed;left:0;top:0;height:100vh;overflow-y:auto;z-index:100;transition:background 0.2s, color 0.2s}.sidebar-spacer.svelte-1jo3udc{width:200px;flex-shrink:0}.sidebar-header.svelte-1jo3udc{display:flex;align-items:center;gap:0.5rem;padding:0 1.25rem 1.5rem;font-weight:700;font-size:1.1rem;color:#fff;border-bottom:1px solid var(--color-sidebar-border);transition:border-color 0.2s}.logo.svelte-1jo3udc{font-size:1.3rem}.sidebar-nav.svelte-1jo3udc{display:flex;flex-direction:column;gap:0.15rem;padding:1rem 0.75rem 0;flex:1}.nav-item.svelte-1jo3udc{display:flex;align-items:center;gap:0.55rem;padding:0.6rem 0.75rem;border-radius:8px;color:var(--color-text-tertiary);text-decoration:none;font-size:0.9rem;transition:background 0.15s, color 0.15s}.nav-item.svelte-1jo3udc:hover{background:var(--color-sidebar-hover);color:#fff;transition:background 0.15s, color 0.15s}.nav-item.active.svelte-1jo3udc{background:var(--color-sidebar-active);color:#fff;font-weight:600;transition:background 0.15s, color 0.15s}.nav-icon.svelte-1jo3udc{font-size:1rem}.dark-mode-toggle.svelte-1jo3udc{align-self:center;margin-top:auto;margin-bottom:1.25rem;width:2.5rem;height:2.5rem;border:1px solid var(--color-sidebar-border);border-radius:8px;background:var(--color-sidebar-hover);color:var(--color-sidebar-text);font-size:1.2rem;cursor:pointer;transition:background 0.15s, border-color 0.15s;display:flex;align-items:center;justify-content:center;padding:0}.dark-mode-toggle.svelte-1jo3udc:hover{background:#3d444d;border-color:#444c56}.dark-mode .dark-mode-toggle.svelte-1jo3udc:hover{background:#262c36;border-color:#30363d}@media(max-width: 900px){.app{flex-direction:column}.sidebar.svelte-1jo3udc{position:sticky;top:0;width:100%;height:auto;flex-direction:row;align-items:center;padding:0;overflow-y:visible;z-index:100}.sidebar-spacer.svelte-1jo3udc{display:none}.sidebar-header.svelte-1jo3udc{border-bottom:none;border-right:1px solid var(--color-sidebar-border);padding:0.6rem 1rem;flex-shrink:0}.sidebar-nav.svelte-1jo3udc{flex-direction:row;padding:0.4rem 0.5rem;gap:0.25rem;flex-wrap:wrap}.nav-item.svelte-1jo3udc{padding:0.4rem 0.65rem}.dark-mode-toggle.svelte-1jo3udc{margin:0;margin-left:auto;margin-right:0.5rem;width:2rem;height:2rem;font-size:1rem}}@media(max-width: 767px){.sidebar.svelte-1jo3udc{position:sticky;padding:0.5rem}.sidebar-header.svelte-1jo3udc{border-right:1px solid #2e3348;padding:0.5rem 0.75rem;font-size:1rem;gap:0.4rem;margin-right:0.5rem;flex-shrink:0}.logo.svelte-1jo3udc{font-size:1.1rem}.logo-text.svelte-1jo3udc{display:none}.sidebar-nav.svelte-1jo3udc{flex:1;padding:0.3rem 0.3rem;gap:0.2rem}.nav-item.svelte-1jo3udc{padding:0.4rem 0.5rem;font-size:0.85rem;min-height:44px;display:flex;align-items:center;justify-content:center}.nav-icon.svelte-1jo3udc{font-size:1.1rem}}@media(max-width: 480px){.sidebar-header.svelte-1jo3udc{display:none}.sidebar-nav.svelte-1jo3udc{width:100%;padding:0.4rem}.nav-item.svelte-1jo3udc{flex:1;justify-content:center;font-size:0.75rem;padding:0.35rem 0.3rem;border-radius:6px}}",
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\n\\timport { base } from '$app/paths';\\n\\timport { page } from '$app/stores';\\n\\timport { darkMode } from './darkModeStore.js';\\n\\n\\t/** @param {string} path */\\n\\tfunction isActive(path) {\\n\\t\\t// Normalise trailing slashes\\n\\t\\tconst current = ($page.url.pathname).replace(/\\\\/$/, '') || '/';\\n\\t\\tconst target = (base + path).replace(/\\\\/$/, '') || '/';\\n\\t\\treturn current === target;\\n\\t}\\n<\/script>\\n\\n<aside class=\\"sidebar\\" class:dark-mode={$darkMode}>\\n\\t<div class=\\"sidebar-header\\">\\n\\t\\t<span class=\\"logo\\">💰</span>\\n\\t\\t<span class=\\"logo-text\\">Budget</span>\\n\\t</div>\\n\\t<nav class=\\"sidebar-nav\\">\\n\\t\\t<a class=\\"nav-item\\" class:active={isActive('/')} href=\\"{base}/\\">\\n\\t\\t\\t<span class=\\"nav-icon\\">📊</span> Planner\\n\\t\\t</a>\\n\\t\\t<a class=\\"nav-item\\" class:active={isActive('/take-home-pay')} href=\\"{base}/take-home-pay\\">\\n\\t\\t\\t<span class=\\"nav-icon\\">🧮</span> Take-Home Pay\\n\\t\\t</a>\\n\\t\\t<a class=\\"nav-item\\" class:active={isActive('/checking')} href=\\"{base}/checking\\">\\n\\t\\t\\t<span class=\\"nav-icon\\">🏦</span> Checking\\n\\t\\t</a>\\n\\t</nav>\\n\\t<button type=\\"button\\" class=\\"dark-mode-toggle\\" on:click={() => darkMode.toggle()} title=\\"Toggle dark mode\\" aria-label=\\"Toggle dark mode\\" aria-pressed={$darkMode}>\\n\\t\\t{#if $darkMode}\\n\\t\\t\\t☀️\\n\\t\\t{:else}\\n\\t\\t\\t🌙\\n\\t\\t{/if}\\n\\t</button>\\n</aside>\\n<!-- Spacer keeps flex siblings correctly offset while sidebar is fixed -->\\n<div class=\\"sidebar-spacer\\" aria-hidden=\\"true\\"></div>\\n\\n<style>\\n\\t:global(html, body) {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\t:global(:root) {\\n\\t\\t--color-bg: #f4f6fa;\\n\\t\\t--color-surface: #fff;\\n\\t\\t--color-text-primary: #1a1d23;\\n\\t\\t--color-text-secondary: #7a8099;\\n\\t\\t--color-text-tertiary: #9ba3b5;\\n\\t\\t--color-text-muted: #888;\\n\\t\\t--color-text-light: #444;\\n\\t\\t--color-border: #d0d5e0;\\n\\t\\t--color-border-light: #e5e8f0;\\n\\t\\t--color-bg-light: #f9fafb;\\n\\t\\t--color-bg-lighter: #eef0f6;\\n\\t\\t--color-accent-blue: #4f86c6;\\n\\t\\t--color-accent-orange: #e07b54;\\n\\t\\t--color-accent-green: #2e8b57;\\n\\t\\t--color-accent-red: #c0392b;\\n\\t\\t--color-accent-purple: #8b6bbf;\\n\\t\\t--color-accent-cyan: #4db8b0;\\n\\t\\t--color-accent-blue-light: #eef4ff;\\n\\t\\t--color-accent-blue-border: #c3d8f7;\\n\\t\\t--color-auth-border: #ccc;\\n\\t\\t--color-sidebar-bg: #1e2130;\\n\\t\\t--color-sidebar-text: #c8cdd8;\\n\\t\\t--color-sidebar-border: #2e3348;\\n\\t\\t--color-sidebar-hover: #2b2f42;\\n\\t\\t--color-sidebar-active: #2e3a5c;\\n\\t}\\n\\n\\t:global(html.dark-mode),\\n\\t:global(.dark-mode) {\\n\\t\\t--color-bg: #0f1117;\\n\\t\\t--color-surface: #161b22;\\n\\t\\t--color-text-primary: #e6edf3;\\n\\t\\t--color-text-secondary: #8b949e;\\n\\t\\t--color-text-tertiary: #6e7681;\\n\\t\\t--color-text-muted: #6e7681;\\n\\t\\t--color-text-light: #c9d1d9;\\n\\t\\t--color-border: #30363d;\\n\\t\\t--color-border-light: #21262d;\\n\\t\\t--color-bg-light: #0d1117;\\n\\t\\t--color-bg-lighter: #1c2128;\\n\\t\\t--color-accent-blue: #58a6ff;\\n\\t\\t--color-accent-orange: #fb8500;\\n\\t\\t--color-accent-green: #3fb950;\\n\\t\\t--color-accent-red: #f85149;\\n\\t\\t--color-accent-purple: #d291ff;\\n\\t\\t--color-accent-cyan: #39c5cf;\\n\\t\\t--color-accent-blue-light: #1f3a5f;\\n\\t\\t--color-accent-blue-border: #2d5fa8;\\n\\t\\t--color-auth-border: #444;\\n\\t\\t--color-sidebar-bg: #0d1117;\\n\\t\\t--color-sidebar-text: #c9d1d9;\\n\\t\\t--color-sidebar-border: #21262d;\\n\\t\\t--color-sidebar-hover: #1c2128;\\n\\t\\t--color-sidebar-active: #1f6feb;\\n\\t}\\n\\n\\t.sidebar {\\n\\t\\tbox-sizing: border-box;\\n\\t\\twidth: 200px;\\n\\t\\tflex-shrink: 0;\\n\\t\\tbackground: var(--color-sidebar-bg);\\n\\t\\tcolor: var(--color-sidebar-text);\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 1.25rem 0;\\n\\t\\tposition: fixed;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\theight: 100vh;\\n\\t\\toverflow-y: auto;\\n\\t\\tz-index: 100;\\n\\t\\ttransition: background 0.2s, color 0.2s;\\n\\t}\\n\\n\\t.sidebar-spacer {\\n\\t\\twidth: 200px;\\n\\t\\tflex-shrink: 0;\\n\\t}\\n\\n\\t.sidebar-header {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tgap: 0.5rem;\\n\\t\\tpadding: 0 1.25rem 1.5rem;\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 1.1rem;\\n\\t\\tcolor: #fff;\\n\\t\\tborder-bottom: 1px solid var(--color-sidebar-border);\\n\\t\\ttransition: border-color 0.2s;\\n\\t}\\n\\n\\t.logo { font-size: 1.3rem; }\\n\\n\\t.sidebar-nav {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: 0.15rem;\\n\\t\\tpadding: 1rem 0.75rem 0;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\t.nav-item {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tgap: 0.55rem;\\n\\t\\tpadding: 0.6rem 0.75rem;\\n\\t\\tborder-radius: 8px;\\n\\t\\tcolor: var(--color-text-tertiary);\\n\\t\\ttext-decoration: none;\\n\\t\\tfont-size: 0.9rem;\\n\\t\\ttransition: background 0.15s, color 0.15s;\\n\\t}\\n\\n\\t.nav-item:hover { \\n\\t\\tbackground: var(--color-sidebar-hover);\\n\\t\\tcolor: #fff;\\n\\t\\ttransition: background 0.15s, color 0.15s;\\n\\t}\\n\\t\\n\\t.nav-item.active { \\n\\t\\tbackground: var(--color-sidebar-active);\\n\\t\\tcolor: #fff;\\n\\t\\tfont-weight: 600;\\n\\t\\ttransition: background 0.15s, color 0.15s;\\n\\t}\\n\\t\\n\\t.nav-icon { font-size: 1rem; }\\n\\n\\t.dark-mode-toggle {\\n\\t\\talign-self: center;\\n\\t\\tmargin-top: auto;\\n\\t\\tmargin-bottom: 1.25rem;\\n\\t\\twidth: 2.5rem;\\n\\t\\theight: 2.5rem;\\n\\t\\tborder: 1px solid var(--color-sidebar-border);\\n\\t\\tborder-radius: 8px;\\n\\t\\tbackground: var(--color-sidebar-hover);\\n\\t\\tcolor: var(--color-sidebar-text);\\n\\t\\tfont-size: 1.2rem;\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: background 0.15s, border-color 0.15s;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.dark-mode-toggle:hover {\\n\\t\\tbackground: #3d444d;\\n\\t\\tborder-color: #444c56;\\n\\t}\\n\\n\\t:global(.dark-mode) .dark-mode-toggle:hover {\\n\\t\\tbackground: #262c36;\\n\\t\\tborder-color: #30363d;\\n\\t}\\n\\n\\t@media (max-width: 900px) {\\n\\t\\t:global(.app) { flex-direction: column; }\\n\\t\\t.sidebar {\\n\\t\\t\\tposition: sticky;\\n\\t\\t\\ttop: 0;\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\theight: auto;\\n\\t\\t\\tflex-direction: row;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tpadding: 0;\\n\\t\\t\\toverflow-y: visible;\\n\\t\\t\\tz-index: 100;\\n\\t\\t}\\n\\t\\t.sidebar-spacer { display: none; }\\n\\t\\t.sidebar-header {\\n\\t\\t\\tborder-bottom: none;\\n\\t\\t\\tborder-right: 1px solid var(--color-sidebar-border);\\n\\t\\t\\tpadding: 0.6rem 1rem;\\n\\t\\t\\tflex-shrink: 0;\\n\\t\\t}\\n\\t\\t.sidebar-nav {\\n\\t\\t\\tflex-direction: row;\\n\\t\\t\\tpadding: 0.4rem 0.5rem;\\n\\t\\t\\tgap: 0.25rem;\\n\\t\\t\\tflex-wrap: wrap;\\n\\t\\t}\\n\\t\\t.nav-item { padding: 0.4rem 0.65rem; }\\n\\t\\t.dark-mode-toggle {\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tmargin-left: auto;\\n\\t\\t\\tmargin-right: 0.5rem;\\n\\t\\t\\twidth: 2rem;\\n\\t\\t\\theight: 2rem;\\n\\t\\t\\tfont-size: 1rem;\\n\\t\\t}\\n\\t}\\n\\n\\t@media (max-width: 767px) {\\n\\t\\t.sidebar {\\n\\t\\t\\tposition: sticky;\\n\\t\\t\\tpadding: 0.5rem;\\n\\t\\t}\\n\\t\\t.sidebar-header {\\n\\t\\t\\tborder-right: 1px solid #2e3348;\\n\\t\\t\\tpadding: 0.5rem 0.75rem;\\n\\t\\t\\tfont-size: 1rem;\\n\\t\\t\\tgap: 0.4rem;\\n\\t\\t\\tmargin-right: 0.5rem;\\n\\t\\t\\tflex-shrink: 0;\\n\\t\\t}\\n\\t\\t.logo { font-size: 1.1rem; }\\n\\t\\t.logo-text {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t\\t.sidebar-nav {\\n\\t\\t\\tflex: 1;\\n\\t\\t\\tpadding: 0.3rem 0.3rem;\\n\\t\\t\\tgap: 0.2rem;\\n\\t\\t}\\n\\t\\t.nav-item {\\n\\t\\t\\tpadding: 0.4rem 0.5rem;\\n\\t\\t\\tfont-size: 0.85rem;\\n\\t\\t\\tmin-height: 44px;\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t}\\n\\t\\t.nav-icon { font-size: 1.1rem; }\\n\\t}\\n\\n\\t@media (max-width: 480px) {\\n\\t\\t.sidebar-header {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t\\t.sidebar-nav {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tpadding: 0.4rem;\\n\\t\\t}\\n\\t\\t.nav-item {\\n\\t\\t\\tflex: 1;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\tfont-size: 0.75rem;\\n\\t\\t\\tpadding: 0.35rem 0.3rem;\\n\\t\\t\\tborder-radius: 6px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  function isActive(path) {
    const current = $page.url.pathname.replace(/\/$/, "") || "/";
    const target = (base + path).replace(/\/$/, "") || "/";
    return current === target;
  }
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_darkMode();
  return `<aside class="${["sidebar svelte-1jo3udc", $darkMode ? "dark-mode" : ""].join(" ").trim()}"><div class="sidebar-header svelte-1jo3udc" data-svelte-h="svelte-1u2vf70"><span class="logo svelte-1jo3udc">💰</span> <span class="logo-text svelte-1jo3udc">Budget</span></div> <nav class="sidebar-nav svelte-1jo3udc"><a class="${["nav-item svelte-1jo3udc", isActive("/") ? "active" : ""].join(" ").trim()}" href="${escape(base, true) + "/"}" data-svelte-h="svelte-1nl83zc"><span class="nav-icon svelte-1jo3udc">📊</span> Planner</a> <a class="${["nav-item svelte-1jo3udc", isActive("/take-home-pay") ? "active" : ""].join(" ").trim()}" href="${escape(base, true) + "/take-home-pay"}" data-svelte-h="svelte-10wrzr8"><span class="nav-icon svelte-1jo3udc">🧮</span> Take-Home Pay</a> <a class="${["nav-item svelte-1jo3udc", isActive("/checking") ? "active" : ""].join(" ").trim()}" href="${escape(base, true) + "/checking"}" data-svelte-h="svelte-1yyfbwt"><span class="nav-icon svelte-1jo3udc">🏦</span> Checking</a></nav> <button type="button" class="dark-mode-toggle svelte-1jo3udc" title="Toggle dark mode" aria-label="Toggle dark mode"${add_attribute("aria-pressed", $darkMode, 0)}>${$darkMode ? `☀️` : `🌙`}</button></aside>  <div class="sidebar-spacer svelte-1jo3udc" aria-hidden="true"></div>`;
});
export {
  Nav as N,
  taxRatesFilingJointly_City as a,
  socialSecurityTaxRates as b,
  calculateTax as c,
  darkMode as d,
  formatAsCurrency as f,
  medicareTaxRates as m,
  standardDeductions as s,
  taxRatesFilingJointly as t
};
