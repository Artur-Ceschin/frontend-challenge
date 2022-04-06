import { Header } from "../components/Header"
import { Characters } from "../components/Characters"
import { Movies } from "../components/Movies"
import { useCharactersMovies } from "../hooks/useCharactersMovies"

export default function Home() {
  const { isCharacterOrMovie } = useCharactersMovies()
  console.log(isCharacterOrMovie)
  return (
    <>
      <Header />
      {isCharacterOrMovie === "characters" ? <Characters /> : <Movies />}
    </>
  )
}
