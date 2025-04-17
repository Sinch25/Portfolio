
import { useEffect, useRef } from 'react';

interface BirdsBackgroundProps {
  children: React.ReactNode;
}

export const BirdsBackground = ({ children }: BirdsBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Three.js and VANTA.BIRDS script dynamically
    const loadScripts = async () => {
      // Check if scripts are already loaded
      if (window.THREE && window.VANTA) {
        initVanta();
        return;
      }

      // Load Three.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js';
      threeScript.async = true;
      document.body.appendChild(threeScript);

      // Load VANTA.BIRDS after Three.js
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
        vantaScript.async = true;
        vantaScript.onload = initVanta;
        document.body.appendChild(vantaScript);
      };
    };

    // Initialize VANTA effect
    const initVanta = () => {
      if (!containerRef.current) return;
      
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }

      if (window.VANTA) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: containerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xe1dffd,
          color1: 0x7e23e8,
          color2: 0x30a6d4,
          birdSize: 0.90,
          speedLimit: 4.00,
          separation: 33.00,
          alignment: 25.00,
          cohesion: 53.00
        });
      }
    };

    loadScripts();

    // Clean up the effect when component unmounts
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

// Add TypeScript interface for the window object
declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}
