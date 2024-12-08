import TeamContext from "../../context/teamContext";
import { useContext } from "react";
import { Link } from "../../components/Link";

const typeColors: { [key: string]: string } = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC"
};

export default function Equipe() {
    const { team, setTeam } = useContext(TeamContext);

    const removePokemon = (index: number) => {
        const newTeam = team.filter((_, i) => i !== index);
        setTeam(newTeam);
    };

    const calculateAverageStats = () => {
        if (team.length === 0) return null;

        const initialStats = {
            hp: { name: "PV", total: 0 },
            attack: { name: "Attaque", total: 0 },
            defense: { name: "Défense", total: 0 },
            "special-attack": { name: "Attaque Spéciale", total: 0 },
            "special-defense": { name: "Défense Spéciale", total: 0 },
            speed: { name: "Vitesse", total: 0 }
        };

        const totalStats = team.reduce((acc, pokemon) => {
            pokemon.stats.forEach((stat: any) => {
                acc[stat.slug].total += stat.base_stat;
            });
            return acc;
        }, JSON.parse(JSON.stringify(initialStats)));

        // Calculer les moyennes
        const averageStats = Object.entries(totalStats).map(([slug, data]) => ({
            name: data.name,
            average: Math.round(data.total / team.length)
        }));

        return averageStats;
    };

    const averageStats = calculateAverageStats();

    return (
        <div>
            {averageStats && team.length > 0 && (
                <div 
                    style={{
                        backgroundColor: "#f5f5f5",
                        padding: "1rem",
                        borderRadius: "8px",
                        margin: "1rem",
                        textAlign: "center"
                    }}
                >
                    <h2>Statistiques moyennes de l'équipe</h2>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        {averageStats.map((stat) => (
                            <div 
                                key={stat.name}
                                style={{
                                    backgroundColor: "white",
                                    padding: "0.5rem",
                                    borderRadius: "4px",
                                    minWidth: "120px"
                                }}
                            >
                                <div>{stat.name}</div>
                                <div style={{ fontWeight: "bold" }}>{stat.average}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="pokemon-grid">
                {team.map((pokemon: any, index: number) => (
                    <div 
                        key={pokemon.id}
                        className="pokemon-card"
                        style={{
                            backgroundColor: pokemon.types ? typeColors[pokemon.types[0].name] : typeColors.normal,
                            padding: "0.5rem",
                            borderRadius: "8px",
                            margin: "0.5rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "150px"
                        }}
                    >
                        <img 
                            src={pokemon.image} 
                            alt={pokemon.name}
                            style={{
                                width: "120px",
                                height: "120px"
                            }} 
                        />
                        <p>{pokemon.types[0].name}</p>
                        
                        <h2 style={{ margin: "0.5rem 0" }}>{pokemon.name}</h2>
                        
                        <button 
                            onClick={() => removePokemon(index)}
                            style={{
                                padding: "0.5rem 1rem",
                                borderRadius: "4px",
                                border: "none",
                                backgroundColor: "#ff4444",
                                color: "white",
                                cursor: "pointer"
                            }}
                        >
                            Retirer de l'équipe
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}