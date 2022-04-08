import { AppProps } from "next/app"
import { CharactersMoviesProvider } from "../hooks/useCharactersMovies"
import GlobalStyle from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CharactersMoviesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CharactersMoviesProvider>
  )
}

export default MyApp
