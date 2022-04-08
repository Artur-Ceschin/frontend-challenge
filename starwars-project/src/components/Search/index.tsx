import { useEffect, useMemo, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"

import { Container } from "./styles"

export function Search({ title, content, setContent }) {
  const { query, setQuery } = useCharactersMovies()

  // const filterData = useMemo(() => {
  //   return content.filter((value) => {
  //     const toLowerCaseQuery = query.toLowerCase()
  //     if (isCharacterOrMovie === "movie") {
  //       return value.title.toLowerCase().includes(toLowerCaseQuery)
  //     } else {
  //       return value.name.toLowerCase().includes(toLowerCaseQuery)
  //     }
  //   })
  // }, [query])

  // useEffect(() => {
  //   const filterData = content.filter((data) =>
  //     data.name.toLowerCase().includes(query.toLowerCase())
  //   )
  //   console.log("filterData", filterData)
  //   console.log("query", query)
  //   setContent(filterData)
  // }, [query])

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
