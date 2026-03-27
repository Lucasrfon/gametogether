'use client';

import { useEffect, useState } from 'react';
import UnsupportedScreen from './UnsupportedScreen';

export default function ScreenGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (isSmallScreen) {
    return <UnsupportedScreen />;
  }

  return <>{children}</>;
}
