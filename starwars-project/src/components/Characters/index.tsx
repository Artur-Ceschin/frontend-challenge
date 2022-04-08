import { useCallback, useEffect, useState } from "react"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"

import { api } from "../../services/api"
import { Search } from "../Search"
import { CharactersCard } from "./CharactersCard"
import { Container } from "./styles"

export function Characters() {
  const { query } = useCharactersMovies()
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCarcters()
  }, [query])

  const getAllCarcters = async () => {
    try {
      const { data } = await api.get("people")

      if (query) {
        const { data } = await api.get(`people/?search=${query}`)
        console.log("result", data.results)
        setCharacters(data.results)
      } else {
        console.log("data", data)
        setCharacters(data.results)
      }
    } catch (err) {
      console.log(err.message)
    } finally {
    }
  }

  console.log("characters", characters)

  return (
    <Container>
      <h1>PERSONAGENS</h1>
      <div>
        <Search
          title="FILTRE POR NOME DO PERSONAGEM"
          content={characters}
          setContent={setCharacters}
        />
      </div>

      <section>
        {characters.map((character, index) => (
          <CharactersCard key={index} character={character} />
        ))}
      </section>
    </Container>
  )
}
