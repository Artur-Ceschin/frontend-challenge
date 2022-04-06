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

  return (
    <CharactersMoviesContext.Provider
      value={{ isCharacterOrMovie, setIsCharacterOrMovie }}
    >
      {children}
    </CharactersMoviesContext.Provider>
  )
}

export function useCharactersMovies() {
  const context = useContext(CharactersMoviesContext)

  return context
}
