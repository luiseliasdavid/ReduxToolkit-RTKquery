import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemonSlice/thunks";

export const PokemonApp = () => {
  const {pokemons = [],isLoading,page} = useSelector((store) => store.pokemons)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getPokemons())
  }, []); 

  const handleClick = () => {
     dispatch( getPokemons(page))
  }

  return (
    <>
    <h1> PokemonApp </h1>
    <hr/>
     <span>Loading : {isLoading ? 'true' : 'false'} </span>
    <ul>
        { pokemons?.map( ({name}) => {
            return <li key={name}> {name} </li> 
        })}
       
    </ul>
    <button
    onClick={ handleClick }
    >
     Next   
    </button>
    </>
  )
}
