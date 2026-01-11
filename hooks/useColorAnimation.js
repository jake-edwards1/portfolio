import { useEffect } from "react";
import { animate, useMotionValue } from "framer-motion";
import { COLORS_TOP } from "@/lib/constants";

/**
 * Custom hook for animating color gradients
 * Returns a Framer Motion value that cycles through the COLORS_TOP array
 */
export function useColorAnimation() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, [color]);

  return color;
}
