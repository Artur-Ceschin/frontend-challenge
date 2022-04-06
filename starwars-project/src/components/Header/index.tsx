import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { CharactersOrMovies, Container, Register, StarWars } from "./styles"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"

export function Header() {
  // const [isCharacterOrMovie, setIsCharacterOrMovie] = useState("characters")
  const { isCharacterOrMovie, setIsCharacterOrMovie } = useCharactersMovies()

  return (
    <Container>
      <StarWars>
        <div className="starwars">
          <h1>STAR</h1>
          <h1>WARS</h1>
        </div>
        <div>
          <h2>CASTING</h2>
        </div>
      </StarWars>

      <CharactersOrMovies isCharacterOrMovie={isCharacterOrMovie}>
        <button
          onClick={() => setIsCharacterOrMovie("characters")}
          className="characters"
        >
          PERSONAGENS
        </button>
        <button
          onClick={() => setIsCharacterOrMovie("movies")}
          className="movies"
        >
          FILMES
        </button>
      </CharactersOrMovies>

      <Register>
        <button>CADASTRAR-SE</button>
      </Register>
    </Container>
  )
}
