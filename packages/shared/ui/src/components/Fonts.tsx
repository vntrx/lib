import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* latin-ext */
      @font-face {
        font-family: 'Nexa';
        font-style: bold;
        font-weight: 800;
        font-display: swap;
        src: local("Nexa Bold"), local("NexaBold"),
          url("/fonts/NexaBold.ttf");
      }
       /* latin-ext */
      @font-face {
        font-family: 'Nexa';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("Nexa Regular"), local("NexaRegular"),
          url("/fonts/Nexa-Regular.ttf");
      }     }
      `}
  />
);

export default Fonts;