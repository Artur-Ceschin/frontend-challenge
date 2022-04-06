import styled from "styled-components"

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

export const CharactersOrMovies = styled.section`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  a {
    margin: 24px;
    background-color: var(--gray-200);
    padding: 6px 48px;
    border-radius: 18px;
  }
`
export const Register = styled.div`
  button {
    background: none;
    color: inherit;
    border: 1px solid var(--yellow-300);
    padding: 10px;
    outline: inherit;
  }
`
