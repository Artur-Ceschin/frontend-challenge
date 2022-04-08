import { FaSearch } from "react-icons/fa"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"
import { Container } from "./styles"

export function Search({ title, content, setContent }) {
  const { query, setQuery } = useCharactersMovies()

  return (
    <Container>
      <FaSearch />
      <input
        type="text"
        placeholder={title}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Container>
  )
}
