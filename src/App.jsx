import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import usePokemon from './services/usePokemon'

function App() {
 const {all, data, pokemon, changePokemon, handleClick, handleClickLi, fnSetPokemon} = usePokemon()

  const [active, setActive] = useState(false)
  const clickLi = () =>{
    setActive(!active)
    handleClick(poke)
  }

  return (
    <main>

      <div id='firstDiv'>
        <form onSubmit={changePokemon}>
        <label>Escribe el nombre espedifico de un pokemon:</label>
        <input type='text'/>
        <button type='submit'>Buscar</button>
        </form>
      
      <div>
        <span>Filtra segun escribes:</span>
        <div  id='firstDiv-second'>
        <input type='text'onFocus={()=> setActive(!active)} defaultValue={pokemon} />
        {active && (
              <ul>
                {all?.results.map((el, i) => (
                  <li key={i} onClick={() => clickLi(el.name)}>
                    {el.name}
                  </li>
                ))}
              </ul>
            )}
        </div>
      </div>
      <div>
        <button value="pikachu" onClick={handleClick}>Pikachu</button>
        <button value="charizard" onClick={handleClick}>Charizard</button>
      </div>
      </div>

      <div id='secondDiv'>
        <Card data={data}/>
      </div>
    </main>
  )
}

export default App
