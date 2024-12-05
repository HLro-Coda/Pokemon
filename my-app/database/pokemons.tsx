import React, { useEffect, useState } from 'react';
import '../database/style.css';
import { Link } from 'react-router-dom';

export interface Pokemon {
  id: number;
  slug: string;
  name: string;
  sprites: {
    shiny: {
      male: string | null;
      female: string | null;
    };
    normal: {
      male: string | null;
      female: string | null;
    };
  };
  types: {
    name: string;
  }[];
}


  

const API_KEY = "advanced-pokedex-api-key-9sd1u98cvg4t98yi";

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokedex.coda.memento-dev.fr/pokemon?with=types", {
      headers: {
        "Authorization": `Bearer ${API_KEY}`
        
      }
    })
      .then((response) => response.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.error(error));
  }, []);
   

  return (
    <div className="pokemon-grid">
      {pokemons.map(pokemon => (
        <div key={pokemon.id} className="pokemon-card">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img 
            src={pokemon.sprites.normal.male || ''} 
            alt={pokemon.name} 
            className="pokemon-image" 
          />
          <p className="pokemon-types">
            {pokemon.types.map(type => type.name).join(' / ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pokemons;
