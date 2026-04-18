import { useCallback, useEffect, useState } from 'react';
import {
  fetchCarouselConfig,
  fetchFeaturesContent,
  fetchHeroContent,
  fetchNavigation
} from '../services/api';

const initialState = {
  navigation: null,
  hero: null,
  featuresSection: null,
  carousel: null,
  loading: true,
  error: ''
};

export function useContent() {
  const [state, setState] = useState(initialState);
  const [requestKey, setRequestKey] = useState(0);

  const retry = useCallback(() => {
    setRequestKey((value) => value + 1);
  }, []);

  useEffect(() => {
    let isCancelled = false;

    setState((current) => ({
      ...current,
      loading: true,
      error: ''
    }));

    Promise.all([
      fetchNavigation(),
      fetchHeroContent(),
      fetchFeaturesContent(),
      fetchCarouselConfig()
    ])
      .then(([navigation, hero, featuresSection, carousel]) => {
        if (isCancelled) {
          return;
        }

        setState({
          navigation,
          hero,
          featuresSection,
          carousel,
          loading: false,
          error: ''
        });
      })
      .catch(() => {
        if (isCancelled) {
          return;
        }

        setState({
          ...initialState,
          loading: false,
          error:
            'We could not load the Grafterr content. Please retry to continue.'
        });
      });

    return () => {
      isCancelled = true;
    };
  }, [requestKey]);

  return {
    ...state,
    retry
  };
}
