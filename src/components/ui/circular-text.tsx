import { motion, useScroll, useTransform } from 'framer-motion';

export const CircularText = ({
  text,
  radius = 100,
  className = '',
}: {
  text: string;
  radius?: number;
  className?: string;
}) => {
  const characters = text.split('');
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{ rotate }}
      className={`relative flex items-center justify-center rounded-full ${className}`}
    >
      {characters.map((char, i) => {
        const angle = (i / characters.length) * 360;
        return (
          <span
            key={i}
            className="absolute text-sm font-bold uppercase text-primary/80"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: 'center center',
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
};
