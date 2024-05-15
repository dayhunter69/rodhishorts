import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const FadeInOutAnimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: '-100px',
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOutAnimation;
