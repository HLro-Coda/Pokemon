import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import '../pokedex/style.css';

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

// Ajout des couleurs par type
const typeColors: { [key: string]: string } = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
};

const getBackgroundColor = (type: string) => {
  switch (type.toLowerCase()) {
    
    case "normal":
      return typeColors.normal;
    case "feu":
      return typeColors.fire;
    case "eau":
      return typeColors.water;
    case "électrik":
      return typeColors.electric;
    case "plante":
      return typeColors.grass;
    case "insecte":
      return typeColors.bug;
    case "roche":
      return typeColors.rock;
    case "spectre":
      return typeColors.ghost;
    case "dragon":
      return typeColors.dragon;
    case "acier":
      return typeColors.steel;
    case "fée":
      return typeColors.fairy;
    case "vol":
      return typeColors.flying;
    case "psy":
      return typeColors.psychic;
    case "combat":
      return typeColors.fighting;
    case "poison":
      return typeColors.poison;
    case "sol":
      return typeColors.ground;
    case "ténèbres":
      return typeColors.dark;
    

    default:
      return typeColors.normal;
  }
};

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
        <a href={`/detailPokemon/${pokemon.slug}`} key={pokemon.id}>
        <div 
          key={pokemon.id} 
          className="pokemon-card"

          style={{
            background: getBackgroundColor(pokemon.types[0].name)
          }}
        >
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
        </a>
      ))}
    </div>
  );
};

export default Pokemons;
