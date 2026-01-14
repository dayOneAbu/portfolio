import { motion } from 'framer-motion';

export const SplitText = ({
  children,
  className = '',
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  const words = children.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.1,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {word}
            {i !== words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
