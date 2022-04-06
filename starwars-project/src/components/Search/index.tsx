import { FaSearch } from "react-icons/fa"

import { Container } from "./styles"

export function Search() {
  return (
    <Container>
      <FaSearch />
      <input type="text" placeholder="FILTRE POR NOME DO PERSONAGEM" />
    </Container>
  )
}
