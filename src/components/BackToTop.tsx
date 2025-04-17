
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show button when user scrolls down 300px from the top
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed right-6 z-50 p-3 rounded-full bg-vivid-purple hover:bg-light-purple text-white shadow-lg transition-all"
          aria-label="Back to top"
          size="icon"
        >
          <ChevronUp size={24} />
        </Button>
      )}
    </>
  );
};
