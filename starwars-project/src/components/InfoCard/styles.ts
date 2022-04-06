import styled from "styled-components"

export const Card = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 auto;
  padding: 0;

  background: var(--gray-200);

  display: flex;
  flex-direction: column;
  /* align-items: start;
  text-align: start;
  justify-content: center; */
  gap: 4px;
  border: 1px solid #f4ede8;

  h2 {
    color: var(--yellow-300);
  }
  .title {
    color: #f4ede8;
  }
`
