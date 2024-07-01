import React from 'react';
import { motion } from 'framer-motion';
import './AnimalCard.scss';

interface AnimalCardProps {
  name: string;
  image: string;
  description: string;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ name, image, description }) => {
  return (
    <motion.div className="animal-card" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default AnimalCard;
