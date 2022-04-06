import { useCallback, useEffect, useState } from "react"
import { error, success } from "toastr"
import { api } from "../../services/api"
import { Search } from "../Search"
import { CharactersCard } from "./CharactersCard"
import { Container } from "./styles"

export function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCarcters()
  }, [])

  const getAllCarcters = async () => {
    try {
      const response = await api.get("people")
      setCharacters(response.data.results)
      success("Personagens carregados com sucesso!")
    } catch (err) {
      error("Não foi possível carregar os personagens", err.message)
    } finally {
    }
  }

  return (
    <Container>
      <h1>PERSONAGENS</h1>
      <div>
        <Search title="FILTRE POR NOME DO PERSONAGEM" />
      </div>

      <section>
        {characters.map((character) => (
          <CharactersCard key={character.name} character={character} />
        ))}
      </section>
    </Container>
  )
}
