import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { usePrefersReducedMotion } from '../hooks/use-toast';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useAnimationVariants() {
  const shouldReduceMotion = usePrefersReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : i * 0.1,
      },
    }),
  };

  // Add other variants as needed
  return { fadeInUp };
}