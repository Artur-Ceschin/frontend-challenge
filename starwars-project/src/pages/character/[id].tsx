import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"
import { api } from "../../services/api"
import { Container, PhysicalInformation } from "../../styles/pages/character"

export default function Character({ people, vehicle }) {
  const { isCharacterOrMovie } = useCharactersMovies()
  const router = useRouter()
  console.log("vehicle2", vehicle)

  const hairTransalation = {
    brown: "Castanho",
    black: "Preto",
    blond: "Loiro",
  }

  return (
    <>
      <Header />
      <Container>
        <h1>{people.name.toUpperCase()}</h1>
        <PhysicalInformation>
          <h2>INFORMAÇÕES FÍSICAS</h2>
          <div>
            <p>ESPÉCIE:{people.species[0]?.toUpperCase() || "HUMANA"} </p>
            <p>ALTURA: {people.heigth} METRO</p>
            <p>PESO: {people.mass} KG</p>
            <p>
              COR DO CABELO: CABELO{" "}
              {hairTransalation[people.hair_color]?.toUpperCase()} KG
            </p>
          </div>
        </PhysicalInformation>
        <PhysicalInformation>
          <h2>VEÍCULOS E NAVES UTILIZADOS</h2>
          <div>
            <div>
              <h3>VEÍCULOS</h3>
              {vehicle.map((data) => (
                <p key={data}>{data?.name}</p>
              ))}
            </div>
          </div>
        </PhysicalInformation>
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

  const { data: people } = await api.get(`people/${id}`)

  const vehicle = await Promise.all(
    people.vehicles.map(async (vehicle: string) => {
      const { data } = await axios.get(vehicle)
      return data
    })
  )

  console.log("vehicle", vehicle)

  // const {data} = await axios.get(people.vehicles[0])

  // const vehicles = people.vehicles.map(async (vehicle) => {
  //   return await axios.get(vehicle)
  // })

  // const vehicles

  // const vehicles = await api.get(`${people.vehicles}`)

  // console.log('vehicles',vehicle)

  // const allStarships = people.starships.map(async (starship) => {
  //   return await api.get(`${starship}`)
  // })

  // console.log("allVehicle", people.vehicles)
  // console.log("allStarships", people.starships)
  return {
    props: {
      people,
      vehicle,
      // allStarships
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
