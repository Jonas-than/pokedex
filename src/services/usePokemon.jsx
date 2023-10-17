import { useState, useEffect } from "react";


function usePokemon(){
    const [data, setData] = useState(null)
    const [pokemon, setPokemon] = useState('pikachu')
    const [all, setAll] = useState(null);
  
    const getData = async (url, setState) => {
      const res = await fetch(url)
      const datos = await res.json()
  
      setState(datos)
    }
  
    useEffect(()=>{
      getData('https://pokeapi.co/api/v2/pokemon?limit=10000', setAll)
    },[])
    
    useEffect(() =>{
      
      getData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, setData)
    },[pokemon])
  
    const changePokemon = (e)=>{
      e.preventDefault()
      setPokemon(e.target[0].value)
    }

  
    const handleClick = (e)=>{
      setPokemon(e.target.value)
    }

    const handleClickLi = (pok) =>{
        setPokemon(pok)
    }

    const handleChange = (e) =>{
        
    }
    return {all, data, pokemon, changePokemon, handleClick, handleClickLi}
}

export default usePokemon