import type { PageContext } from "vike/types";

type Props = {
  routeParams: {
    id: string;
  }
}

export default async function DetailPokemon({ routeParams }: Props) {
  const getPokemon = async (id: string) => {
    const response = await fetch(`https://pokedex.coda.memento-dev.fr/pokemon/${id}`, {
      headers: {
        "Authorization": `Bearer advanced-pokedex-api-key-9sd1u98cvg4t98yi`
      }
    });
    return response.json();
  }

  const pokemon = await getPokemon(routeParams.id);
  
  return {
    pokemon
  }


}
