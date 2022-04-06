import { MoviesCard } from "./MoviesCard"
import { Search } from "../Search"
import { Container } from "./styles"

export function Movies() {
  return (
    <Container>
      <h1>FILMES</h1>
      <div>
        <Search title="FILTRE POR NOME DO FILME" />
      </div>

      <section>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </section>
    </Container>
  )
}
