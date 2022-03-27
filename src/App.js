import React, { useEffect, useState } from "react"
import {sortData} from './shared/utilities'
import {SORT_COLUMN} from './shared/constants'
import Table from './components/Table'
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        if (data.pokemon && data.pokemon.length > 0)
            data.pokemon.sort(sortData(SORT_COLUMN.Name))
        setPokemonData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {pokemonData.pokemon && pokemonData.pokemon.length > 0 && (
         <React.Fragment>
         <h1 id='title'>Pokemon Table</h1>
         <Table data={pokemonData.pokemon} />
         </React.Fragment>
      )}
    </div>
  )
}

export default App
