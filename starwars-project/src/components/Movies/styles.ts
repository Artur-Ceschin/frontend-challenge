import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-top: 6%;

  h1 {
    color: var(--yellow-300);
    text-align: center;
    margin-bottom: 4%;
  }
  section {
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`
