import { shade } from "polished"
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

export const LoadMoreButton = styled.div`
  width: 30%;
  button {
    width: 100%;
    background: none;
    color: var(--yellow-300);
    font-weight: bold;
    border: 2px solid var(--yellow-300);
    padding: 12px;
    outline: inherit;
  }

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.9, "#FFE81F")};
  }

  margin: 24px auto;
`
