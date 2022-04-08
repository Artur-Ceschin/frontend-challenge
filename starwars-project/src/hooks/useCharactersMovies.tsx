import {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react"

interface IUseCharactersMoviesContext {
  isCharacterOrMovie: string
  setIsCharacterOrMovie: Dispatch<SetStateAction<string>>
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

interface IUseCharactersMoviesProviderProps {
  children: ReactNode
}
const CharactersMoviesContext = createContext<IUseCharactersMoviesContext>(
  {} as IUseCharactersMoviesContext
)

export function CharactersMoviesProvider({
  children,
}: IUseCharactersMoviesProviderProps) {
  const [isCharacterOrMovie, setIsCharacterOrMovie] = useState("characters")

  const [query, setQuery] = useState("")

  return (
    <CharactersMoviesContext.Provider
      value={{
        isCharacterOrMovie,
        setIsCharacterOrMovie,
        query,
        setQuery,
      }}
    >
      {children}
    </CharactersMoviesContext.Provider>
  )
}

export function useCharactersMovies() {
  const context = useContext(CharactersMoviesContext)

  return context
}
