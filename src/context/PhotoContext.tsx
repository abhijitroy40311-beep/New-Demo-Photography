import React, { createContext, useContext } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/photography';

interface PhotoContextType {
  portfolioItems: PortfolioItem[];
}

const PhotoContext = createContext<PhotoContextType>({
  portfolioItems: PORTFOLIO_ITEMS,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PhotoContext.Provider value={{ portfolioItems: PORTFOLIO_ITEMS }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useRealPhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('useRealPhotos must be used within a PhotoProvider');
  }
  return context;
};
