import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'polished'
export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Titillium';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Titillium';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzYw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Titillium';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzYw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}


${normalize()}
html{
    font-size:16px;
    box-sizing: border-box
}

*,*::before,*::after {
    box-sizing: inherit
}
`

/* FlexBox */
export const FLEX_CENTER = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FLEX_START = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const FLEX_END = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const FLEX_COLUMN_CENTER = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`
