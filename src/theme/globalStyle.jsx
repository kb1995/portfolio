import { injectGlobal } from "styled-components";
import media from "theme/media";

// global font sizes for different screens
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

    body {
        font-family: 'Roboto Mono', monospace;
        font-size: 12px;

        ${media.tablet`
            font-size: 18px;
        `};

        ${media.desktop`
            font-size: 22px;
        `};
    };
`;
