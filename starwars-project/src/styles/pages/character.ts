import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 4% auto;

  h1 {
    color: var(--yellow-300);
  }
`
export const PhysicalInformation = styled.div`
  margin-top: 30px;
  background-color: var(--gray-200);
  border: 1px solid var(--gray-300);
  padding: 30px;

  h2 {
    color: var(--yellow-300);
  }
  div {
    margin-top: 20px;
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 16px;
    p {
      margin: 0;
      padding: 0;
      opacity: 0.7;
    }
  }
`
export const ShipsUsed = styled.div`
  margin-top: 30px;
  background-color: var(--gray-200);
  border: 1px solid var(--gray-300);
  padding: 30px;

  h2 {
    color: var(--yellow-300);
  }
`
