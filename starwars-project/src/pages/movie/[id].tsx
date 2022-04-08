import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"
import { api } from "../../services/api"
import {
  AppearsInMovie,
  Container,
  Datasheet,
  SynopsisContainer,
} from "../../styles/pages/movie"

export default function Movie({
  movie,
  appearedCharacters,
  appearedSpecies,
  appearedVehicles,
  appearedStarShips,
  appearedPlanets,
}) {
  const { setIsCharacterOrMovie } = useCharactersMovies()
  useEffect(() => {
    setIsCharacterOrMovie("movies")
  })
  return (
    <>
      <Header />
      <Container>
        <h1>{movie.title.toUpperCase()}</h1>
        <h3>Episódio {movie.episode_id}</h3>

        <div className="flex-container">
          <div>
            <SynopsisContainer>
              <h2>SINOPSE</h2>
              <p>{movie.opening_crawl}</p>
            </SynopsisContainer>
            <Datasheet>
              <h2>FICHA TÉCNICA</h2>
              <div className="grid-card">
                <div>
                  <h3>DIRETOR</h3>
                  <p>{movie.director}</p>
                </div>

                <div>
                  <h3>PRODUTORES</h3>
                  <p>{movie.producer}</p>
                </div>
              </div>

              <h3>LANÇAMENTO</h3>
              <p>{movie.release_date}</p>
            </Datasheet>
          </div>
          <AppearsInMovie>
            <h2>APARECEM NESSE FILME</h2>
            <div className="content-characters">
              <div>
                <h3>PERSONAGENS</h3>
                {appearedCharacters.map((character) => (
                  <p key={character.id}>{character.name}</p>
                ))}
              </div>
              <div>
                <h3>ESPÉCIE</h3>
                {appearedSpecies.map((specie) => (
                  <p key={specie.id}>{specie.name}</p>
                ))}
              </div>
              <div>
                <h3>VEÍCULOS</h3>
                {appearedVehicles.map((vehicle) => (
                  <p key={vehicle.id}>{vehicle.name}</p>
                ))}
              </div>
            </div>
            <div className="content-flex">
              <div>
                <h3>NAVES</h3>
                {appearedStarShips.map((starship) => (
                  <p key={starship.id}>{starship.name}</p>
                ))}
              </div>
              <div>
                <h3>PLANETAS</h3>
                {appearedPlanets.map((planet) => (
                  <p key={planet.id}>{planet.name}</p>
                ))}
              </div>
            </div>
          </AppearsInMovie>
        </div>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const { data: movie } = await api.get(`films/${id}`)

  const appearedCharacters = await Promise.all(
    movie?.characters.map(async (character: string) => {
      const { data } = await axios.get(character)
      return data
    })
  )
  const appearedSpecies = await Promise.all(
    movie?.species.map(async (specie: string) => {
      const { data } = await axios.get(specie)
      return data
    })
  )
  const appearedVehicles = await Promise.all(
    movie?.vehicles.map(async (vehicle: string) => {
      const { data } = await axios.get(vehicle)
      return data
    })
  )
  const appearedStarShips = await Promise.all(
    movie?.starships.map(async (starship: string) => {
      const { data } = await axios.get(starship)
      return data
    })
  )
  const appearedPlanets = await Promise.all(
    movie?.planets.map(async (planet: string) => {
      const { data } = await axios.get(planet)
      return data
    })
  )

  return {
    props: {
      movie,
      appearedCharacters,
      appearedSpecies,
      appearedVehicles,
      appearedStarShips,
      appearedPlanets,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
