import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 4% auto;

  h1,
  h2 {
    color: var(--yellow-300);
  }
  div.flex-container {
    display: flex;
    gap: 10px;
  }
`

export const SynopsisContainer = styled.div`
  margin-top: 30px;

  width: 500px;
  background-color: var(--gray-200);
  border: 1px solid var(--gray-300);
  padding: 30px;
  p {
    margin-top: 12px;
    opacity: 0.9;
  }
`

export const Datasheet = styled.div`
  width: 500px;
  background-color: var(--gray-200);
  border: 1px solid var(--gray-300);
  padding: 30px;

  div.grid-card {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    margin-bottom: 20px;

    div {
      margin: 0;
      padding: 0;
    }

    p {
      opacity: 0.8;
    }
  }
`

export const AppearsInMovie = styled.div`
  margin-top: 30px;
  width: 100%;
  background-color: var(--gray-200);
  border: 1px solid var(--gray-300);
  padding: 30px;

  div.content-characters {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin: 20px 0;

    div {
      margin: 0;
      padding: 0;
    }

    p {
      opacity: 0.8;
    }
  }

  div.content-flex {
    display: flex;
    justify-content: flex-start;
    gap: 16px;

    div {
      margin: 0;
      padding: 0;
    }

    p {
      opacity: 0.8;
    }
  }
`
