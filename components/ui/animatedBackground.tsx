"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="absolute inset-0 z-[5]"
      initial={{
        background:
          "radial-gradient(150% 110% at 50% 10%, #FFFFFF 0%, #F8FBFF 40%, #D8E7FF 65%, rgba(118,165,253,0.95) 90%, #4F8CFF 100%)",
        scale: 1,
        opacity: 0.98,
      }}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.98, 1, 0.98],
        backgroundPosition: ["50% 0%", "50% 10%", "50% 0%"],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        background:
          "radial-gradient(150% 110% at 50% 10%, #FFFFFF 0%, #F8FBFF 40%, #D8E7FF 65%, rgba(118,165,253,0.95) 90%, #4F8CFF 100%)",
        filter: "blur(20px)",
        backgroundSize: "110% 110%",
      }}
    />
  );
}