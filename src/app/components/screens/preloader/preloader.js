'use client'

import { useState, useEffect } from 'react';
import MainScreen from '../mainScreen/mainScreen';
import '@/components/screens/preloader/preloader.scss';

function Preloader({ onLoadingComplete }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval);
          setLoading(false);
          onLoadingComplete();
        }
        return Math.min(prevCount + 1, 100);
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className='preloader' style={{ opacity: loading ? 1 : 0 }}>
      <p>{count}%</p>
    </div>
  );
}

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      <Preloader onLoadingComplete={handleLoadingComplete} />
      {loadingComplete && <MainScreen />}
    </div>
  );
}

export default App;