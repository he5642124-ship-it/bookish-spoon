import { motion } from 'framer-motion';
import { useMobile } from './hooks/use-mobile';

export default function HeroVisual() {
  const isMobile = useMobile();
  return (
    <div className="relative w-full flex justify-center mt-12">
      <motion.svg
        width={isMobile ? 360 : 800}
        height={isMobile ? 160 : 360}
        viewBox={isMobile ? '0 0 360 160' : '0 0 800 360'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: 40, filter: isMobile ? undefined : 'blur(12px)' }}
        animate={{ opacity: 1, y: 0, filter: isMobile ? undefined : 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        className="max-w-full"
      >
        {/* Main flowing path */}
        <motion.path
          d={isMobile ? 'M 30 120 Q 120 40 180 80 Q 270 120 340 40' : 'M 60 300 Q 250 100 400 180 Q 600 260 740 80'}
          stroke="url(#gradient1)"
          strokeWidth={isMobile ? 4 : 7}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        />
        {/* Only render extra paths and dots on desktop */}
        {!isMobile && <>
          <motion.path
            d="M 100 320 Q 300 160 420 220 Q 650 300 780 120"
            stroke="url(#gradient2)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 1.3 }}
            style={{ opacity: 0.7 }}
          />
          <motion.path
            d="M 40 220 Q 200 60 350 120 Q 500 200 700 40"
            stroke="url(#gradient3)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
            style={{ opacity: 0.5 }}
          />
          <motion.circle
            cx="400"
            cy="180"
            r="11"
            fill="url(#dotGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.2 }}
          />
          <motion.circle
            cx="600"
            cy="260"
            r="7"
            fill="url(#dotGlow2)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.7, delay: 2.5 }}
          />
          <motion.circle
            cx="740"
            cy="80"
            r="14"
            fill="url(#spark)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.7 }}
          />
        </>}
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1={isMobile ? '30' : '60'} y1={isMobile ? '120' : '300'} x2={isMobile ? '340' : '740'} y2={isMobile ? '40' : '80'} gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
          {!isMobile && <>
            <linearGradient id="gradient2" x1="100" y1="320" x2="780" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#67e8f9" />
            </linearGradient>
            <linearGradient id="gradient3" x1="40" y1="220" x2="700" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818cf8" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
            <radialGradient id="dotGlow" cx="0" cy="0" r="1" gradientTransform="translate(400 180) scale(30)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.95" />
              <stop offset="1" stopColor="#6366F1" stopOpacity="0.15" />
            </radialGradient>
            <radialGradient id="dotGlow2" cx="0" cy="0" r="1" gradientTransform="translate(600 260) scale(20)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.12" />
            </radialGradient>
            <radialGradient id="spark" cx="0" cy="0" r="1" gradientTransform="translate(740 80) scale(32)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.98" />
              <stop offset="1" stopColor="#6366F1" stopOpacity="0.18" />
            </radialGradient>
          </>}
        </defs>
      </motion.svg>
    </div>
  );
} 