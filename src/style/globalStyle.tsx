import { createGlobalStyle } from 'styled-components';
import { primaryColor } from './variables';

const StyledGlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Lato', sans-serif;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        max-width: 1400px;
        margin: 0 auto;
        color: ${primaryColor};
    }

    body {
        margin: 0 auto;
    }

    h1, h3 {
        font-family: 'Handlee', cursive;
    }

    h1 {
        font-size: 3.1rem;
    }

    h2 {
        font-size: 2.1rem;
    }

    a {
        color: ${primaryColor};
        text-decoration: none;
    }
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
