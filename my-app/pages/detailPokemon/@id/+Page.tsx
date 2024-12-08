import { useData } from "vike-react/useData";
import { Link } from "../../../components/Link.js";
import TeamContext from "../../../context/teamContext";
import { useContext, useState } from "react";

export default function DetailPokemon() {
    const { pokemon } = useData();
    const { team, setTeam } = useContext(TeamContext);
    const [currentSprite, setCurrentSprite] = useState(pokemon.current.sprites.normal.male);
    

    const addToTeam = () => {
        if (team.length >= 6) {
            alert("Votre équipe est déjà complète (6 Pokémon maximum)");
            return;
        }
        
        setTeam([...team, {
            name: pokemon.current.name,
            image: currentSprite,
            types: pokemon.current.types.map((type: any) => type.name),
            stats: pokemon.current.stats
        }]);
    };

    const handleSpriteChange = (type: 'normal' | 'shiny', gender: 'male' | 'female') => {
        const sprite = pokemon.current.sprites[type][gender];
        if (sprite) {
            setCurrentSprite(sprite);
        }
    };

    return <div>
        <img src={currentSprite} alt={pokemon.current.name} />
        <div className="sprite-buttons">
            {pokemon.current.sprites.normal.male && (
                <button onClick={() => handleSpriteChange('normal', 'male')}>
                    Normal ♂
                </button>
            )}
            {pokemon.current.sprites.normal.female && (
                <button onClick={() => handleSpriteChange('normal', 'female')}>
                    Normal ♀
                </button>
            )}
            {pokemon.current.sprites.shiny.male && (
                <button onClick={() => handleSpriteChange('shiny', 'male')}>
                    Shiny ♂
                </button>
            )}
            {pokemon.current.sprites.shiny.female && (
                <button onClick={() => handleSpriteChange('shiny', 'female')}>
                    Shiny ♀
                </button>
            )}
        </div>
        <h1>{pokemon.current.name}</h1>
        <p>{pokemon.current.types.map((type: any) => type.name).join(", ")}</p>
        <p>{pokemon.current.stats.map((stat: any) => `${stat.name}: ${stat.base_stat}`).join(", ")}</p>    
        <button 
            onClick={addToTeam}
            disabled={team.length >= 6}
        >
            {team.length >= 6 ? "Équipe complète" : "Ajouter à l'équipe"}
        </button>
    </div>;
}   
