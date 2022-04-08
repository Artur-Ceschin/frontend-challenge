import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 4% auto;

  h1 {
    color: var(--yellow-300);
  }
  div.flex-container {
    display: flex;
  }
`
export const PhysicalInformation = styled.div`
  margin-top: 30px;
  width: 100%;
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

  div.vehicles-starships {
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    div {
      display: block;
      margin: 0;
      padding: 0;
      p {
        opacity: 0.7;
      }
    }
  }
`
export const GraphicSection = styled.div`
  margin-top: 30px;
  background-color: var(--gray-200);
  border: 1px solid var(--gray-300);
  padding: 30px;
  width: 35%;

  h2 {
    color: var(--yellow-300);
    margin-bottom: 30px;
  }
  section {
    img {
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
    p {
      margin-top: 12px;
      text-align: center;
      opacity: 0.9;
    }
  }

  div {
    margin-top: 30px;
  }
`
