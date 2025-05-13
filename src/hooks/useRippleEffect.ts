import { useEffect } from 'react';

const useRippleEffect = (selector: string, trigger: 'hover' | 'click', delay: number = 1000) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const canvas = document.querySelector('canvas');

    if (!canvas || elements.length === 0) return;

    const handleInteraction = (e: Event) => {
      if (!(e instanceof MouseEvent)) return;
      
      const rect = canvas.getBoundingClientRect();
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: e.clientX - rect.left,
        clientY: e.clientY - rect.top
      });
      
      canvas.dispatchEvent(clickEvent);
    };

    elements.forEach(element => {
      if (trigger === 'hover') {
        element.addEventListener('mouseenter', handleInteraction as EventListener);
      } else {
        element.addEventListener('click', handleInteraction as EventListener);
      }
    });

    return () => {
      elements.forEach(element => {
        if (trigger === 'hover') {
          element.removeEventListener('mouseenter', handleInteraction as EventListener);
        } else {
          element.removeEventListener('click', handleInteraction as EventListener);
        }
      });
    };
  }, [selector, trigger, delay]);
}

export default useRippleEffect;
