import axios from "axios"
import { useEffect, useState } from "react"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"
import { api } from "../../services/api"
import { Search } from "../Search"
import { CharactersCard } from "./CharactersCard"
import { Container, LoadMoreButton } from "./styles"

export function Characters() {
  const { query } = useCharactersMovies()
  const [characters, setCharacters] = useState([])
  const [nextUrl, setNextUrl] = useState("")

  useEffect(() => {
    getAllCarcters()
  }, [query])

  const getAllCarcters = async () => {
    try {
      const { data } = await api.get("people")
      setNextUrl(data.next)

      if (query) {
        const { data } = await api.get(`people/?search=${query}`)
        setCharacters(data.results)
      } else {
        setCharacters(data.results)
      }
    } catch (err) {
      console.log(err.message)
    } finally {
    }
  }

  async function handleLoadMoreCharacters() {
    const { data } = await axios.get(nextUrl)

    setCharacters([...characters, ...data.results])
  }

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

      <LoadMoreButton>
        <button onClick={() => handleLoadMoreCharacters()}>
          CARREGAR MAIS
        </button>
      </LoadMoreButton>
    </Container>
  )
}
