import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchAnimals } from '../api/animalApi';
import AnimalCard from '../components/AnimalCard';

const Home: React.FC = () => {
  const { data: animals, loading, error } = useFetch(fetchAnimals);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Animals</h1>
      <div className="animal-list">
        {animals.map(animal => (
          <AnimalCard key={animal.id} name={animal.name} image={animal.image} description={animal.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;
