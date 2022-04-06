import Image from "next/image"
import Link from "next/link"

import { CharactersOrMovies, Container, Register, StarWars } from "./styles"

export function Header() {
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

      <CharactersOrMovies>
        <Link href="/caracter">PERSONAGENS</Link>
        <Link href="/caracter">FILMES</Link>
      </CharactersOrMovies>

      <Register>
        <button>CADASTRAR-SE</button>
      </Register>
    </Container>
  )
}
