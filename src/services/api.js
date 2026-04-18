import content from '../data/content.json';

const getDelay = () => 1100 + Math.floor(Math.random() * 401);

function withDelay(selector) {
  return new Promise((resolve, reject) => {
    const delay = getDelay();

    window.setTimeout(() => {
      try {
        const data = selector(content);
        resolve(data);
      } catch (error) {
        reject(new Error('Unable to load content.'));
      }
    }, delay);
  });
}

export function fetchNavigation() {
  return withDelay((data) => data.navigation);
}

export function fetchHeroContent() {
  return withDelay((data) => data.hero);
}

export function fetchFeaturesContent() {
  return withDelay((data) => data.featuresSection);
}

export function fetchCarouselConfig() {
  return withDelay((data) => data.carousel);
}
