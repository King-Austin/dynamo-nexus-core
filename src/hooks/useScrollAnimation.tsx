import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, delay = 0 } = options;

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    delay,
  });

  return { ref, inView };
};
