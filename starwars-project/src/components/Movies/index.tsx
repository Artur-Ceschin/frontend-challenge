import { useEffect, useState } from "react"
import { SemipolarSpinner } from "react-epic-spinners"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"
import { api } from "../../services/api"
import { Search } from "../Search"
import { MoviesCard } from "./MoviesCard"
import { Container } from "./styles"

export function Movies() {
  const { query } = useCharactersMovies()

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllMovies()
  }, [query])

  const getAllMovies = async () => {
    try {
      setLoading(true)
      const { data } = await api.get("films")

      if (query) {
        const { data } = await api.get(`films/?search=${query}`)

        setMovies(data.results)
      } else {
        setMovies(data.results)
      }
    } catch (err) {
      console.log(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <h1>FILMES</h1>
      <div>
        <Search
          title="FILTRE POR NOME DO FILME"
          content={movies}
          setContent={setMovies}
        />
      </div>

      <section>
        {loading ? (
          <div className="spinner">
            <SemipolarSpinner color="#FFE81F" size={200} />
          </div>
        ) : (
          movies.map((movie) => <MoviesCard key={movie.title} movie={movie} />)
        )}
      </section>
    </Container>
  )
}
