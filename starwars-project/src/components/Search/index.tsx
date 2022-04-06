import { FaSearch } from "react-icons/fa"

import { Container } from "./styles"

export function Search({ title }) {
  return (
    <Container>
      <FaSearch />
      <input type="text" placeholder={title} />
    </Container>
  )
}
