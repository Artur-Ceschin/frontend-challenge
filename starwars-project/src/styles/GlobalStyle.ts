import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
    
  }

  :root{
      --white: #FFFFFF;

      --gray-100: #e1e1e6;
      --gray-300: #a8a8b3;
      --gray-700: #323238;
      --gray-200: #303030;
      --gray-850: #1f2729;
      --gray-900: #121214;

      --cyan-500: #61dafb;
      --yellow-300:#FFE81F;

  }

  @media(max-width: 1080px) {
      html{
          font-size: 93.75%;
      }
  }
  @media(max-width: 720px) {
      html{
          font-size: 87.5%;
      }
  }

  body{
      background: #000000;
      color: var(--white);
  }

  body, input, select, textarea, button{
      font: 400 1rem;
      font-family: 'Kanit', sans-serif;
      /* font-family: 'Roboto Slab', serif; */
  }

  button{
      cursor: pointer;
  }

  a{
      color: inherit;
      text-decoration:none;
  }

`
