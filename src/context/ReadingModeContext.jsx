import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Reading mode lets visitors choose between plain-English copy
 * (recruiters, hiring managers) and technical detail (engineers).
 * Every section reads from this one context.
 */
const ReadingModeContext = createContext(null);
const STORAGE_KEY = 'portfolio:reading-mode';

function readStoredMode() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'technical' ? 'technical' : 'plain';
  } catch {
    return 'plain';
  }
}

export function ReadingModeProvider({ children }) {
  const [mode, setMode] = useState(readStoredMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* storage unavailable: the toggle still works for this visit */
    }
  }, [mode]);

  const value = { mode, setMode, isTechnical: mode === 'technical' };
  return <ReadingModeContext.Provider value={value}>{children}</ReadingModeContext.Provider>;
}

export function useReadingMode() {
  const context = useContext(ReadingModeContext);
  if (!context) throw new Error('useReadingMode must be used inside ReadingModeProvider');
  return context;
}
