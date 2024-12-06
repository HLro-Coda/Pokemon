import TeamContext from "../../context/teamContext";
import { useContext } from "react";
import { Link } from "../../components/Link";


export default function Equipe() {
    const { team } = useContext(TeamContext);
    return <div>
        {team.map((pokemon: any) => (
            <div key={pokemon.id}>
                <img src={pokemon.image} alt={pokemon.name} />
                <h1>{pokemon.name}</h1>
            </div>
        ))}
    </div>;
}