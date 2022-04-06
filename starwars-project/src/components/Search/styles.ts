import styled from "styled-components"

export const Container = styled.div`
  background: var(--gray-200);

  border: 0;
  padding: 16px;
  width: 40%;
  align-items: center;
  display: flex;
  gap: 16px;
  border: 1px solid #f4ede8;
  margin-bottom: 2%;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #f4ede8;
      font-size: 1rem;
    }
  }
`
