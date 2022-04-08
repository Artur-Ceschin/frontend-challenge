import { shade } from "polished"
import styled, { css } from "styled-components"

interface CharactersOrMovies {
  isCharacterOrMovie: String
}

export const Container = styled.header`
  background: #0f0f0f;
  height: 100%;
  width: 100%;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 24px;
`
export const StarWars = styled.div`
  width: 100px;
  color: var(--yellow-300);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  .starwars {
    line-height: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CharactersOrMovies = styled.section<CharactersOrMovies>`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  ${(props) =>
    props.isCharacterOrMovie === "characters"
      ? css`
          button.characters {
            background: var(--gray-200);
          }
        `
      : css`
          button.characters {
            background: none;
          }
        `}
  ${(props) =>
    props.isCharacterOrMovie === "movies"
      ? css`
          button.movies {
            background: var(--gray-200);
          }
        `
      : css`
          button.movies {
            background: none;
          }
        `}
  button {
    background: none;
    color: inherit;
    border: none;
    border-radius: 18px;
    padding: 10px;
    outline: inherit;
    padding: 6px 48px;
    margin: 24px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#303030")};
    }
  }
`
export const Register = styled.div`
  button {
    background: none;
    color: inherit;
    border: 1px solid var(--yellow-300);
    padding: 10px;
    outline: inherit;
    cursor: not-allowed;
  }
`
