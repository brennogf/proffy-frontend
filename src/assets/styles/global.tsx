import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;

  --color-background: #f0f0f7;
  --color-primary-lighter: #000;
  --color-primary-light: #111;
  --color-primary: #222;
  --color-primary-dark: #111;
  --color-primary-darker: #000;
  --color-secundary: #B22222;
  --color-secundary-dark: #8B0000;
  --color-title-in-primary: #ffffff;
  --color-text-in-primary: #f8f8fc;
  --color-text-title: #32264d;
  --color-text-complement: #9c98a6;
  --color-text-base: #6a6180;
  --color-line-in-white: #e6e6f0;
  --color-input-background: #f8f8fc;
  --color-button-text: #ffffff;
  --color-box-base: #ffffff;
  --color-box-footer: #fafafc;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100vh;
}

body {
  background: var(--color-background);
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;
