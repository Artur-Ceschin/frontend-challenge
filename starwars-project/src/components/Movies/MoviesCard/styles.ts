import styled from "styled-components"

export const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding: 20px;

  background: var(--gray-200);

  border: 1px solid #f4ede8;

  h2 {
    color: var(--yellow-300);
    margin-bottom: 16px;
  }
  .info {
    margin: 8px 0;

    div {
      p {
        color: var(--gray-300);
        font-size: 0.9rem;
      }
    }
    .title {
      color: #f4ede8;
      font-weight: bold;
    }
  }
  position: relative;

  button {
    position: absolute;
    width: 85%;
    bottom: 12%;
    margin-top: 20px;
    text-align: center;
    background: none;
    color: var(--yellow-300);
    font-weight: bold;
    border: 2px solid var(--yellow-300);
    padding: 10px;
    outline: inherit;
  }
`
