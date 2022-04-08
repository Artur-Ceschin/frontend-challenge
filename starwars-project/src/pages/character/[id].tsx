import axios from "axios"
import { ArcElement, Chart } from "chart.js"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Pie } from "react-chartjs-2"
import { Header } from "../../components/Header"
import { useCharactersMovies } from "../../hooks/useCharactersMovies"
import { api } from "../../services/api"
import {
  Container,
  GraphicSection,
  PhysicalInformation,
} from "../../styles/pages/character"
Chart.register(ArcElement)

export default function Character({
  people,
  vehicles,
  starships,
  films,
  totalFilms,
  specie,
}) {
  const { isCharacterOrMovie } = useCharactersMovies()
  const router = useRouter()
  const [totalMovieAppearance, setTotalMovieAppeance] = useState(0)

  useEffect(() => {
    const totalPercent = (films?.length / totalFilms?.count) * 100
    setTotalMovieAppeance(totalPercent)
  }, [])

  const hairTransalation = {
    brown: "Castanho",
    black: "Preto",
    blond: "Loiro",
  }

  const data = {
    labels: ["Gray", "Yellow"],
    datasets: [
      {
        data: [totalFilms?.count, films?.length],
        backgroundColor: ["#484F5B", "#FFE81F"],
        hoverBackgroundColor: ["#484F5B", "#FFE81F"],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  }

  return (
    <>
      <Header />
      <Container>
        <h1>{people?.name.toUpperCase()}</h1>
        <div className="flex-container">
          <div>
            <PhysicalInformation>
              <h2>INFORMAÇÕES FÍSICAS</h2>
              <div>
                <p>ESPÉCIE:{specie?.name.toUpperCase() || "HUMANA"} </p>
                <p>ALTURA: {people?.heigth} METRO</p>
                <p>PESO: {people?.mass} KG</p>
                <p>
                  COR DO CABELO: CABELO{" "}
                  {hairTransalation[people?.hair_color]?.toUpperCase()} KG
                </p>
              </div>
            </PhysicalInformation>
            <PhysicalInformation>
              <h2>VEÍCULOS E NAVES UTILIZADOS</h2>
              <div className="vehicles-starships">
                <div>
                  <h3>VEÍCULOS</h3>
                  {vehicles?.map((vehicle) => (
                    <p key={vehicle}>{vehicle?.name}</p>
                  ))}
                </div>
                <div>
                  <h3>NAVES</h3>
                  {starships?.map((starship) => (
                    <p key={starship}>{starship?.name}</p>
                  ))}
                </div>
              </div>
            </PhysicalInformation>
          </div>
          <GraphicSection>
            <h2>APRIÇÕES EM FILMES</h2>
            <section>
              <Pie data={data} />
              <p>
                {totalMovieAppearance.toFixed(2)}%(
                {`${films?.length} de ${totalFilms?.count}`})
              </p>
            </section>
            <div>
              <h3>APARECE EM</h3>
              {films?.map((film) => (
                <p key={film}>{film?.title}</p>
              ))}
            </div>
          </GraphicSection>
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

  const { data: people } = await api.get(`people/${id}`)

  const vehicles = await Promise.all(
    people.vehicles.map(async (vehicle: string) => {
      const { data } = await axios.get(vehicle)
      return data
    })
  )
  const starships = await Promise.all(
    people.starships.map(async (starship: string) => {
      const { data } = await axios.get(starship)
      return data
    })
  )

  const { data: specie } = await axios.get(people?.species[0])

  const films = await Promise.all(
    people.films.map(async (film: string) => {
      const { data } = await axios.get(film)
      return data
    })
  )

  const { data: totalFilms } = await api.get("films")

  return {
    props: {
      people,
      vehicles,
      starships,
      films,
      totalFilms,
      specie,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
