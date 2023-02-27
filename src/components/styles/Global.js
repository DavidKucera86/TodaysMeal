import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        
        background: lavender;
        color: dimgray;
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    h1 {
        font-size: 5rem;
        margin-top: 0;
        margin-bottom: 1rem;
        color: hotpink;
    }

    h2 {
        text-align: center;
    }

    img {
        max-width: 100%;
    }

`;
export default GlobalStyles;
