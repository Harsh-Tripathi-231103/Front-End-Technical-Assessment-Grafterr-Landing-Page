import { useCallback, useEffect, useMemo, useState } from 'react';

function getItemsPerView(config) {
  if (typeof window === 'undefined') {
    return config?.desktop ?? 3;
  }

  if (window.innerWidth < 768) {
    return config?.mobile ?? 1;
  }

  if (window.innerWidth < 1100) {
    return config?.tablet ?? 2;
  }

  return config?.desktop ?? 3;
}

export function useCarousel(items = [], config) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView(config));

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView(config));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [config]);

  const maxIndex = useMemo(() => {
    return Math.max(items.length - itemsPerView, 0);
  }, [items.length, itemsPerView]);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => Math.min(index + 1, maxIndex));
  }, [maxIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }, []);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return {
    currentIndex,
    itemsPerView,
    canGoPrevious,
    canGoNext,
    goToPrevious,
    goToNext
  };
}
