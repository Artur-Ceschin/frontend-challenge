import { InfoCard } from "../InfoCard"
import { Search } from "../Search"
import { Container } from "./styles"

export function Characters() {
  return (
    <Container>
      <h1>PERSONAGENS</h1>
      <div>
        <Search />
      </div>

      <section>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </section>
    </Container>
  )
}
