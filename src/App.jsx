import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import { useContent } from './hooks/useContent';
import styles from './App.module.css';

function App() {
  const {
    navigation,
    hero,
    featuresSection,
    carousel,
    loading,
    error,
    retry
  } = useContent();

  return (
    <main className={styles.appShell} id="top">
      <HeroSection
        navigation={navigation}
        hero={hero}
        loading={loading}
        error={error}
        onRetry={retry}
      />
      <FeaturesSection
        featuresSection={featuresSection}
        carouselConfig={carousel}
        loading={loading}
        error={error}
        onRetry={retry}
      />
      <div id="solutions" />
      <div id="contact" />
    </main>
  );
}

export default App;
