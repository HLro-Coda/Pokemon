import { useData } from "vike-react/useData";
import { Link } from "../../../components/Link.js";
import TeamContext from "../../../context/teamContext";
import { useContext } from "react";

export default function DetailPokemon() {
    const { pokemon } = useData();
    const { team, setTeam } = useContext(TeamContext);

    console.log(pokemon);

    return <div>
        
        <img src={pokemon.current.sprites.normal.male} alt={pokemon.current.name} />
        <h1>{pokemon.current.name}</h1>
        <p>{pokemon.current.types.map((type: any) => type.name).join(", ")}</p>
        <p>{pokemon.current.stats.map((stat: any) => `${stat.name}: ${stat.base_stat}`).join(", ")}</p>    
        <button onClick={
            () => {
                setTeam([...team, {
                    name: pokemon.current.name,
                    image: pokemon.current.sprites.normal.male
                }])
            }
        }>Ajouter à l'équipe</button>


    </div>;
}   
