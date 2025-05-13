import { useEffect, useState } from 'react';

const DAY_COLOR = '#43C8FF';   // Blue
const NIGHT_COLOR = '#FF6B6B'; // Coral red
const DAY_START_HOUR = 6;      // 6 AM
const DAY_END_HOUR = 18;       // 6 PM

export const useColorScheme = () => {
  const [backgroundColor, setBackgroundColor] = useState(DAY_COLOR);

  useEffect(() => {
    const updateColor = () => {
      const now = new Date();
      const hour = now.getHours();
      const isDaytime = hour >= DAY_START_HOUR && hour < DAY_END_HOUR;
      setBackgroundColor(isDaytime ? DAY_COLOR : NIGHT_COLOR);
    };

    // Update immediately
    updateColor();

    // Update every minute to check for time changes
    const interval = setInterval(updateColor, 60000);

    return () => clearInterval(interval);
  }, []);

  return backgroundColor;
};
