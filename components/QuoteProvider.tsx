'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import QuoteModal from './QuoteModal';

interface QuoteContextValue {
  openQuote: (service?: string) => void;
}

const QuoteContext = createContext<QuoteContextValue>({ openQuote: () => {} });

export function useQuote() {
  return useContext(QuoteContext);
}

export default function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>();
  const [session, setSession] = useState(0);

  const openQuote = useCallback((s?: string) => {
    setService(s);
    setSession((n) => n + 1);
    setOpen(true);
  }, []);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <QuoteModal key={session} isOpen={open} onClose={() => setOpen(false)} initialService={service} />
    </QuoteContext.Provider>
  );
}
