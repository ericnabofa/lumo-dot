import  { useEffect } from 'react';
import { addRipple } from './rippleManager';  // Import the addRipple function

export default function Ripple() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);  // Call the RippleManager to add a ripple
    };

    // Add event listener for clicks
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);  // Clean up the listener
    };
  }, []);

  return null;
}
