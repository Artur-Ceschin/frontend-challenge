import { useEffect, useState } from "react"
import { Card } from "./styles"

export function MoviesCard({ movie }) {
  const [romanEpisode, setRomanEpisode] = useState("")

  useEffect(() => {
    convertNumberToRoman()
  }, [])

  function convertNumberToRoman() {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
    let str = ""

    for (let i of Object.keys(roman)) {
      let q = Math.floor(movie.episode_id / roman[i])
      movie.episode_id -= q * roman[i]
      str += i.repeat(q)
    }

    setRomanEpisode(str)
  }

  return (
    <Card>
      <h2>{movie.title.toUpperCase()}</h2>
      <p>Episódio {romanEpisode}</p>
      <div className="info">
        <p className="title">INFORMAÇÕES</p>
        <div>
          <p>
            LANÇADO EM:{" "}
            {new Intl.DateTimeFormat("pt-BR").format(
              new Date(movie.release_date)
            )}
          </p>
          <p>DIRIGIDO POR: {movie.director} </p>
        </div>
      </div>

      <button>VER DETALHES</button>
    </Card>
  )
}
