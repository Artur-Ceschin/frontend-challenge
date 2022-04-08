import axios from "axios"
import { SemipolarSpinner } from "react-epic-spinners"
import { useCallback, useEffect, useState } from "react"
import { Card } from "./styles"
import Link from "next/link"

interface ICharactersCardProps {
  name: string
  birth_year: number
  homeworld: string
  species: Array<string>
  height: number
  vehicles: Array<string>
}

export function CharactersCard({ character }) {
  const [specie, setSpecie] = useState("")
  const [homeWorld, setHomeWorld] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [characterId, setCharacterId] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCharacterData()
  }, [])

  const getCharacterData = useCallback(async () => {
    try {
      setLoading(true)
      const homeUrl = character.homeworld
      if (homeUrl) {
        const homeWorld = await axios.get(homeUrl)
        setHomeWorld(homeWorld.data.name)
      }

      const specieUrl = character.species[0]
      if (specieUrl) {
        const specie = await axios.get(specieUrl)
        setSpecie(specie.data.name)
      }
      await character.vehicles.map(async (vehicle: string) => {
        if (vehicle) {
          const vechile = await axios.get(vehicle)
          setVehicle(vechile.data.name)
        }
      })
      if (character.url) {
        setCharacterId(character.url.split("/")[5])
      }
    } catch (err) {
      setLoading(false)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <Card>
      {loading ? (
        <div className="spinner">
          <SemipolarSpinner color="#FFE81F" />
        </div>
      ) : (
        <>
          <h2>{character.name.toUpperCase()}</h2>
          <div className="info">
            <p className="title">NASCIMENTO</p>
            <div>
              <p>DATA: {character.birth_year}</p>
              <p>PLANETA: {homeWorld}</p>
            </div>
          </div>
          <div className="info">
            <p className="title">DESCRICAO FISICA</p>
            <div>
              <p>ESPECIE: {specie}</p>
              <p>ALTURA: {character.height}</p>
            </div>
          </div>
          <div className="info">
            <p className="title">VEICULOS USADOS</p>
            <div>
              <p>{vehicle.toUpperCase()}</p>
            </div>
          </div>

          <button>
            <Link href={`character/${characterId}`}>VER DETALHES</Link>
          </button>
        </>
      )}
    </Card>
  )
}
