import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Theme defaults to the visitor's OS preference (via the CSS
 * prefers-color-scheme media query, no JS involved). Choosing
 * "Light" or "Dark" here stores an explicit override; choosing
 * "System" clears it. The inline script in index.html applies any
 * stored override before first paint to avoid a flash.
 */
const ThemeContext = createContext(null);
const STORAGE_KEY = 'portfolio:theme';

function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    return 'system';
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }

    try {
      if (theme === 'system') {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(STORAGE_KEY, theme);
      }
    } catch {
      /* storage unavailable: the toggle still works for this visit */
    }
  }, [theme]);

  const value = { theme, setTheme };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
