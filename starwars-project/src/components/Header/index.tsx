import Link from "next/link"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"
import { CharactersOrMovies, Container, Register, StarWars } from "./styles"

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
          <Link href="/">
            <a>PERSONAGENS</a>
          </Link>
        </button>
        <button
          onClick={() => setIsCharacterOrMovie("movies")}
          className="movies"
        >
          <Link href="/">
            <a>FILMES</a>
          </Link>
        </button>
      </CharactersOrMovies>

      <Register>
        <button>CADASTRAR-SE</button>
      </Register>
    </Container>
  )
}
