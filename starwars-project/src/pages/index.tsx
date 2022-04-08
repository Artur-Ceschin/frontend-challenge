import { Characters } from "../components/Characters"
import { Header } from "../components/Header"
import { Movies } from "../components/Movies"
import { useCharactersMovies } from "../hooks/useCharactersMovies"

export default function Home() {
  const { isCharacterOrMovie } = useCharactersMovies()

  return (
    <>
      <Header />
      {isCharacterOrMovie === "characters" ? <Characters /> : <Movies />}
    </>
  )
}
