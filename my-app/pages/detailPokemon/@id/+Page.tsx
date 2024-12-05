
import { useData } from "vike-react/useData";
export default function DetailPokemon() {
    const { pokemon } = useData();

    console.log(pokemon);

    return <div>
        
        <img src={pokemon.current.sprites.normal.male} alt={pokemon.current.name} />
        <h1>{pokemon.current.name}</h1>
        <p>{pokemon.current.types.map((type: any) => type.name).join(", ")}</p>
        <p>{pokemon.current.stats.map((stat: any) => `${stat.name}: ${stat.base_stat}`).join(", ")}</p>    
    </div>;
}   
