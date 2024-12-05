import { useEffect, useState } from "react";
import { Pokemon } from "../../database/pokemons";
import { useParams } from "react-router-dom";

export default function DetailPokemon() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const API_KEY = "advanced-pokedex-api-key-9sd1u98cvg4t98yi";
    
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        
        fetch(`https://pokedex.coda.memento-dev.fr/pokemon`, {
            headers: {
                "Authorization": `Bearer ${API_KEY}`
            }
        })
        .then(response => response.json())
        .then(data => setPokemon(data));
    }, []);

    if (!pokemon) return <div>Chargement...</div>;

    return (
        <div>
            
        </div>
    );
}