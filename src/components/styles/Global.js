import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth
    }

    body {
        
        background: honeydew;
        color: dimgray;
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    h1 {
        font-size: 4.5rem;        
        margin: 1rem;        
        color: hotpink;
        text-align: center; 
    }

    h2 {
        text-align: center;
        margin: 2rem 0;
    }

    h3 {
        margin: 1rem 0;
    }

    img {
        max-width: 100%;
    }

    header, footer {
        img {
            width: 10rem;
        }
    }

`;
export default GlobalStyles;
