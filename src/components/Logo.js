import React from 'react';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */
import styled, {keyframes} from 'styled-components/macro';

const rotate = keyframes`
  from {
    transform: rotateY(-25deg);
  }
  to {
    transform: rotateY(30deg);
  }
`
const skew = keyframes`
  from {
    transform: skewY(-10deg);
  }
  to {
    transform: skewY(10deg);
  }
`
const move = keyframes`
  from {}
  to {
    transform: translateX(45px);
  }
`

const LogoWrap = styled(Link)`
  height: 100%;
  display: block;
  cursor: inherit;
  background: none;
  transition: opacity 0.3s ease-in-out;

  &:hover .pen {
      animation: 
      ${rotate} 2s ease-in-out infinite alternate, 
      ${skew} 3s infinite alternate,
      ${move} 5s infinite alternate;
  }
  @media screen and (max-width: 1023px) {

  }
  
  @media screen and (max-width: 767px) {
  }
  
  @media screen and (max-width: 440px) {
  }
`;
const ClickablePath = styled.path`
  cursor: pointer;
`;

const SvgButton = styled.svg`
  width: 100%;
  height: 100%;
  pointer-events: all;
`;

const Logo = () => (
    <LogoWrap to="/main"
    rel="Гражданин поэт">
      <SvgButton
        viewBox="0 0 506 350" 
        shapeRendering="geometricPrecision" 
        textRendering="geometricPrecision" 
        imageRendering="optimizeQuality" 
        fillRule="evenodd" 
        clipRule="evenodd">
      <g id="_1649929265152">
        <ClickablePath fill="#212228" fillRule="nonzero" d="M0 0h506v350H0z"/>
        <ClickablePath fill="#ff7a00" d="M94.53 53.42h-16.2v74.7h-3.37V50.05h19.57v3.37zm24.19-3.37c3.82 0 6.52 1.01 8.09 3.04 1.58 2.02 2.37 4.83 2.37 8.43v33.64c0 3.6-.79 6.41-2.37 8.44-1.57 2.02-4.27 3.04-8.09 3.04h-8.21v21.48h-3.37V50.05h11.58zm7.08 10.8c0-1.95-.52-3.68-1.57-5.18-.98-1.5-2.66-2.25-5.06-2.25h-8.66v49.73h8.66c2.4 0 4.08-.71 5.06-2.14a8.78 8.78 0 001.57-5.17V60.85zm17.81 67.27h-3.48l8.88-78.07h10.34l8.89 78.07h-3.49l-1.91-17.1h-17.31l-1.92 17.1zm8.44-74.7l-6.19 54.23h16.53l-6.07-54.23h-4.27zm72.05-3.37l-9.34 27.11 10.68 50.96h-3.48l-10.35-49.27h-7.19v49.27h-3.38V78.85h-7.19l-10.35 49.27h-3.48l10.68-50.96-9.33-27.11h3.59l8.78 25.42h7.3V50.05h3.38v25.42h7.31l8.77-25.42h3.6zm37.42 74.7h3.6v13.16h-2.92l-.79-9.79h-23.05l-.79 9.79h-2.92l.11-13.16c1.88 0 3.22-.41 4.05-1.24.82-.9 1.27-2.32 1.35-4.27l2.92-69.19h18.44v74.7zm-3.37 0V53.42h-11.69l-2.93 65.82c-.07 2.7-.82 4.53-2.25 5.51h16.87zm20.75 3.37h-3.49l8.89-78.07h10.34l8.88 78.07h-3.48l-1.91-17.1h-17.32l-1.91 17.1zm8.43-74.7l-6.18 54.23h16.53l-6.08-54.23h-4.27zm49.11-3.37h3.37v78.07h-3.37V78.85h-16.41v49.27h-3.38V50.05h3.38v25.42h16.41V50.05zm42.02 0v78.07h-3.37V74.01l-15.97 15.98v38.13h-3.37V50.05h3.37V85.6l15.97-15.98V50.05h3.37zm39.1 0v78.07h-3.37V78.85h-16.42v49.27h-3.37V50.05h3.37v25.42h16.42V50.05h3.37z"/>
        <ClickablePath fill="#ff7a00" d="M94.53 53.42v3.13h3.12v-3.13h-3.12zm-16.2 0V50.3h-3.12v3.12h3.12zm0 74.7v3.13h3.13v-3.13h-3.13zm-3.37 0h-3.12v3.13h3.12v-3.13zm0-78.07v-3.13h-3.12v3.13h3.12zm19.57 0h3.12v-3.13h-3.12v3.13zm0 .25h-16.2v6.25h16.2V50.3zm-19.32 3.12v74.7h6.25v-74.7h-6.25zM78.33 125h-3.37v6.25h3.37V125zm-.25 3.12V50.05h-6.24v78.07h6.24zm-3.12-74.95h19.57v-6.25H74.96v6.25zm16.44-3.12v3.37h6.25v-3.37H91.4zm35.41 3.04l2.47-1.92-2.47 1.92zm-16.3 53.55v-3.13h-3.13v3.13h3.13zm0 21.48v3.13h3.12v-3.13h-3.12zm-3.37 0h-3.13v3.13h3.13v-3.13zm0-78.07v-3.13h-3.13v3.13h3.13zm17.09 5.62l-2.62 1.71.03.04.03.05 2.56-1.8zm-13.72-2.25V50.3h-3.13v3.12h3.13zm0 49.73h-3.13v3.12h3.13v-3.12zm13.72-2.14l-2.56-1.79-.02.03 2.58 1.76zm-5.51-47.84c3.34 0 4.89.89 5.63 1.83l4.93-3.83c-2.42-3.11-6.27-4.25-10.56-4.25v6.25zm5.63 1.83c1 1.3 1.7 3.34 1.7 6.52h6.25c0-4.02-.88-7.6-3.02-10.35L124.35 55zm1.7 6.52v33.64h6.25V61.52h-6.25zm0 33.64c0 3.18-.7 5.23-1.7 6.52l4.93 3.84c2.14-2.76 3.02-6.34 3.02-10.36h-6.25zm-1.7 6.52c-.74.95-2.29 1.83-5.63 1.83v6.25c4.29 0 8.14-1.14 10.56-4.24l-4.93-3.84zm-5.63 1.83h-8.21v6.25h8.21v-6.25zm-11.34 3.13v21.48h6.25v-21.48h-6.25zm3.13 18.36h-3.37v6.25h3.37V125zm-.25 3.12V50.05h-6.25v78.07h6.25zm-3.12-74.95h11.58v-6.25h-11.58v6.25zm21.78 7.68c0-2.55-.69-4.91-2.13-6.97l-5.12 3.59a5.71 5.71 0 011.01 3.38h6.24zm-2.08-6.88c-1.73-2.68-4.62-3.67-7.67-3.67v6.25c1.74 0 2.23.5 2.44.83l5.23-3.41zm-7.67-3.67h-8.66v6.25h8.66V50.3zm-11.79 3.12v49.73h6.25V53.42h-6.25zm3.13 52.85h8.66v-6.25h-8.66v6.25zm8.66 0c2.99 0 5.87-.91 7.63-3.49l-5.15-3.53c-.18.27-.68.77-2.48.77v6.25zm7.62-3.47a11.92 11.92 0 002.13-6.96h-6.24c0 1.35-.36 2.44-1.01 3.38l5.12 3.58zm2.13-6.96V60.85h-6.24v34.99h6.24zm14.69 32.28v3.13h2.8l.31-2.78-3.11-.35zm-3.48 0l-3.11-.35-.39 3.48h3.5v-3.13zm8.88-78.07v-3.13h-2.79l-.31 2.78 3.1.35zm10.34 0l3.11-.35-.32-2.78h-2.79v3.13zm8.89 78.07v3.13h3.5l-.4-3.48-3.1.35zm-3.49 0l-3.1.35.31 2.78h2.79v-3.13zm-1.91-17.1l3.11-.34-.32-2.78h-2.79v3.12zm-17.31 0v-3.12h-2.8l-.31 2.78 3.11.34zm6.52-57.6V50.3h-2.79l-.32 2.77 3.11.35zm-6.19 54.23l-3.1-.35-.4 3.47h3.5v-3.12zm16.53 0v3.12h3.49l-.38-3.47-3.11.35zm-6.07-54.23l3.1-.34-.31-2.78h-2.79v3.12zM143.61 125h-3.48v6.25h3.48V125zm-.38 3.48l8.88-78.08-6.2-.7-8.89 78.07 6.21.71zm5.78-75.31h10.34v-6.25h-10.34v6.25zm7.24-2.77l8.88 78.08 6.21-.71-8.88-78.07-6.21.7zm11.99 74.6h-3.49v6.25h3.49V125zm-.38 2.78l-1.91-17.1-6.21.69 1.91 17.1 6.21-.69zm-5.02-19.88h-17.31v6.25h17.31v-6.25zm-20.42 2.78l-1.91 17.1 6.21.69 1.91-17.1-6.21-.69zm6.52-57.61l-6.18 54.23 6.2.7 6.19-54.22-6.21-.71zm-3.08 57.7h16.53v-6.25h-16.53v6.25zm19.64-3.47l-6.08-54.22-6.21.69 6.08 54.23 6.21-.7zm-9.18-57h-4.27v6.25h4.27V50.3zm67.78-.25l2.95 1.02 1.42-4.15h-4.37v3.13zm-9.34 27.11l-2.95-1.02-.28.82.17.84 3.06-.64zm10.68 50.96v3.13h3.85l-.79-3.77-3.06.64zm-3.48 0l-3.06.65.52 2.48h2.54v-3.13zm-10.35-49.27l3.06-.64-.52-2.49h-2.54v3.13zm-7.19 0v-3.13h-3.13v3.13h3.13zm0 49.27v3.13h3.12v-3.13h-3.12zm-3.38 0h-3.12v3.13h3.12v-3.13zm0-49.27h3.13v-3.13h-3.13v3.13zm-7.19 0v-3.13h-2.54l-.52 2.49 3.06.64zm-10.35 49.27v3.13h2.54l.52-2.48-3.06-.65zm-3.48 0l-3.06-.64-.79 3.77h3.85v-3.13zm10.68-50.96l3.06.64.17-.84-.28-.82-2.95 1.02zm-9.33-27.11v-3.13h-4.38l1.42 4.15 2.96-1.02zm3.59 0l2.96-1.02-.73-2.11h-2.23v3.13zm8.78 25.42l-2.96 1.02.73 2.11h2.23v-3.13zm7.3 0v3.13h3.13v-3.13h-3.13zm0-25.42v-3.13h-3.12v3.13h3.12zm3.38 0h3.12v-3.13h-3.12v3.13zm0 25.42h-3.13v3.13h3.13v-3.13zm7.31 0v3.13h2.22l.73-2.11-2.95-1.02zm8.77-25.42v-3.13h-2.23l-.73 2.11 2.96 1.02zm.64-1.02l-9.33 27.11 5.91 2.04 9.33-27.11-5.91-2.04zM211.7 77.8l10.69 50.97 6.11-1.29-10.68-50.96-6.12 1.28zm13.74 47.2h-3.48v6.25h3.48V125zm-.43 2.48l-10.34-49.27-6.11 1.28 10.34 49.28 6.11-1.29zm-13.4-51.76h-7.19v6.25h7.19v-6.25zm-10.32 3.13v49.27h6.25V78.85h-6.25zm3.13 46.15h-3.38v6.25h3.38V125zm-.25 3.12V78.85h-6.25v49.27h6.25zm-3.13-52.4h-7.19v6.25h7.19v-6.25zm-10.25 2.49l-10.34 49.27 6.11 1.29 10.34-49.28-6.11-1.28zM183.5 125h-3.48v6.25h3.48V125zm-.43 3.77l10.69-50.97-6.12-1.28-10.68 50.96 6.11 1.29zm10.58-52.63l-9.33-27.11-5.91 2.04 9.34 27.11 5.9-2.04zm-12.28-22.97h3.59v-6.25h-3.59v6.25zm.64-2.1l8.77 25.42 5.91-2.04-8.77-25.42-5.91 2.04zm11.73 27.53h7.3v-6.25h-7.3v6.25zm10.43-3.13V50.05h-6.25v25.42h6.25zm-3.13-22.3h3.38v-6.25h-3.38v6.25zm.25-3.12v25.42h6.25V50.05h-6.25zm3.13 28.55h7.31v-6.25h-7.31v6.25zm10.26-2.11l8.77-25.42-5.91-2.04-8.77 25.42 5.91 2.04zm5.82-23.32h3.6v-6.25h-3.6v6.25zm41.02 71.58h-3.12v3.12h3.12v-3.12zm3.6 0h3.12v-3.13h-3.12v3.13zm0 13.16v3.13h3.12v-3.13h-3.12zm-2.92 0l-3.11.25.23 2.88h2.88v-3.13zm-.79-9.79l3.11-.25-.23-2.87h-2.88v3.12zm-23.05 0V125h-2.88l-.23 2.87 3.11.25zm-.79 9.79v3.13h2.89l.23-2.88-3.12-.25zm-2.92 0l-3.12-.02-.03 3.15h3.15v-3.13zm.11-13.16v-3.13h-3.09l-.03 3.1 3.12.03zm4.05-1.24l2.21 2.21.05-.05.04-.05-2.3-2.11zm1.35-4.27l-3.12-.13v.01l3.12.12zm2.92-69.19v-3.13h-2.99l-.13 3 3.12.13zm18.44 0h3.13v-3.13h-3.13v3.13zm-3.37 74.7v3.12h3.12v-3.12h-3.12zm0-71.33h3.12V50.3h-3.12v3.12zm-11.69 0V50.3h-2.99l-.13 2.98 3.12.14zm-2.93 65.82l-3.12-.14v.05l3.12.09zm-2.25 5.51l-1.76-2.58-8.33 5.7h10.09v-3.12zm20.24 3.12h3.6v-6.25h-3.6v6.25zm.48-3.12v13.16h6.24v-13.16H262zm3.12 10.04h-2.92v6.25h2.92v-6.25zm.19 2.87l-.79-9.79-6.22.51.79 9.78 6.22-.5zm-3.9-12.66h-23.05v6.25h23.05V125zm-26.16 2.87l-.79 9.79 6.23.5.78-9.78-6.22-.51zm2.32 6.92h-2.92v6.25h2.92v-6.25zm.2 3.15l.12-13.16-6.25-.06-.11 13.17 6.24.05zm-3.01-10.07c2.22 0 4.58-.47 6.26-2.15l-4.42-4.42c.03-.03-.31.32-1.84.32v6.25zm6.35-2.25c1.55-1.69 2.08-3.99 2.17-6.26l-6.24-.24c-.07 1.62-.43 2.17-.53 2.28l4.6 4.22zm2.17-6.25l2.92-69.19-6.24-.26-2.92 69.19 6.24.26zm-.2-66.2h18.44v-6.25h-18.44v6.25zm15.32-3.12v74.7h6.25v-74.7h-6.25zm2.87 74.7V53.42h-6.24v71.33h6.24zm-3.12-74.45h-11.69v6.25h11.69V50.3zm-14.81 2.98l-2.93 65.82 6.24.28 2.93-65.82-6.24-.28zm-2.93 65.87c-.06 2.28-.68 2.87-.89 3.02l3.53 5.16c2.63-1.8 3.52-4.88 3.6-8.01l-6.24-.17zm.87 8.72h16.87v-6.25h-16.87v6.25zm37.62.25v3.13h2.79l.31-2.78-3.1-.35zm-3.49 0l-3.1-.35-.4 3.48h3.5v-3.13zm8.89-78.07v-3.13h-2.79l-.32 2.78 3.11.35zm10.34 0l3.1-.35-.31-2.78h-2.79v3.13zm8.88 78.07v3.13h3.5l-.39-3.48-3.11.35zm-3.48 0l-3.11.35.31 2.78h2.8v-3.13zm-1.91-17.1l3.1-.34-.31-2.78h-2.79v3.12zm-17.32 0v-3.12h-2.79l-.31 2.78 3.1.34zm6.52-57.6V50.3h-2.79l-.31 2.77 3.1.35zm-6.18 54.23l-3.11-.35-.39 3.47h3.5v-3.12zm16.53 0v3.12h3.49l-.39-3.47-3.1.35zm-6.08-54.23l3.11-.34-.31-2.78h-2.8v3.12zM278.9 125h-3.49v6.25h3.49V125zm-.38 3.48l8.88-78.08-6.21-.7-8.88 78.07 6.21.71zm5.78-75.31h10.34v-6.25H284.3v6.25zm7.24-2.77l8.88 78.08 6.21-.71-8.89-78.07-6.2.7zm11.98 74.6h-3.48v6.25h3.48V125zm-.38 2.78l-1.91-17.1-6.21.69 1.91 17.1 6.21-.69zm-5.01-19.88h-17.32v6.25h17.32v-6.25zm-20.42 2.78l-1.92 17.1 6.21.69 1.91-17.1-6.2-.69zm6.52-57.61l-6.19 54.23 6.21.7 6.19-54.22-6.21-.71zm-3.08 57.7h16.53v-6.25h-16.53v6.25zm19.63-3.47l-6.07-54.22-6.21.69 6.07 54.23 6.21-.7zm-9.18-57h-4.27v6.25h4.27V50.3zm44.84-.25v-3.13h-3.12v3.13h3.12zm3.37 0h3.13v-3.13h-3.13v3.13zm0 78.07v3.13h3.13v-3.13h-3.13zm-3.37 0h-3.12v3.13h3.12v-3.13zm0-49.27h3.13v-3.13h-3.13v3.13zm-16.41 0v-3.13h-3.13v3.13h3.13zm0 49.27v3.13h3.12v-3.13h-3.12zm-3.38 0h-3.12v3.13h3.12v-3.13zm0-78.07v-3.13h-3.12v3.13h3.12zm3.38 0h3.12v-3.13h-3.12v3.13zm0 25.42h-3.13v3.13h3.13v-3.13zm16.41 0v3.13h3.13v-3.13h-3.13zm0-22.3h3.37v-6.25h-3.37v6.25zm.25-3.12v78.07h6.25V50.05h-6.25zm3.12 74.95h-3.37v6.25h3.37V125zm-.24 3.12V78.85h-6.25v49.27h6.25zm-3.13-52.4h-16.41v6.25h16.41v-6.25zm-19.54 3.13v49.27h6.25V78.85h-6.25zm3.13 46.15h-3.38v6.25h3.38V125zm-.25 3.12V50.05h-6.25v78.07h6.25zm-3.13-74.95h3.38v-6.25h-3.38v6.25zm.25-3.12v25.42h6.25V50.05h-6.25zm3.13 28.55h16.41v-6.25h-16.41v6.25zm19.54-3.13V50.05h-6.25v25.42h6.25zm38.89-25.42h3.12v-3.13h-3.12v3.13zm0 78.07v3.13h3.12v-3.13h-3.12zm-3.37 0h-3.13v3.13h3.13v-3.13zm0-54.11h3.12v-7.54l-5.34 5.33 2.22 2.21zm-15.97 15.98l-2.21-2.21-.92.91v1.3h3.13zm0 38.13v3.13h3.12v-3.13h-3.12zm-3.37 0h-3.13v3.13h3.13v-3.13zm0-78.07v-3.13h-3.13v3.13h3.13zm3.37 0h3.12v-3.13h-3.12v3.13zm0 35.55h-3.13v7.54l5.34-5.33-2.21-2.21zm15.97-15.98l2.2 2.21.92-.91v-1.3h-3.12zm0-19.57v-3.13h-3.13v3.13h3.13zm.25 0v78.07h6.24V50.05h-6.24zm3.12 74.95h-3.37v6.25h3.37V125zm-.25 3.12V74.01h-6.25v54.11h6.25zm-5.34-56.32l-15.96 15.98 4.42 4.42 15.96-15.98-4.42-4.42zm-16.88 18.19v38.13h6.25V89.99h-6.25zm3.13 35.01h-3.37v6.25h3.37V125zm-.25 3.12V50.05h-6.25v78.07h6.25zm-3.12-74.95h3.37v-6.25h-3.37v6.25zm.24-3.12V85.6h6.25V50.05h-6.25zm5.34 37.76l15.96-15.98-4.42-4.42-15.96 15.98 4.42 4.42zm16.88-18.19V50.05h-6.25v19.57h6.25zm-3.12-16.45h3.37v-6.25h-3.37v6.25zm42.47-3.12h3.13v-3.13h-3.13v3.13zm0 78.07v3.13h3.13v-3.13h-3.13zm-3.37 0h-3.12v3.13h3.12v-3.13zm0-49.27h3.12v-3.13h-3.12v3.13zm-16.42 0v-3.13h-3.12v3.13h3.12zm0 49.27v3.13h3.12v-3.13h-3.12zm-3.37 0h-3.13v3.13h3.13v-3.13zm0-78.07v-3.13h-3.13v3.13h3.13zm3.37 0h3.12v-3.13h-3.12v3.13zm0 25.42h-3.12v3.13h3.12v-3.13zm16.42 0v3.13h3.12v-3.13h-3.12zm0-25.42v-3.13h-3.12v3.13h3.12zm.25 0v78.07h6.25V50.05h-6.25zm3.12 74.95h-3.37v6.25h3.37V125zm-.25 3.12V78.85h-6.24v49.27h6.24zm-3.12-52.4h-16.42v6.25h16.42v-6.25zm-19.54 3.13v49.27h6.24V78.85h-6.24zm3.12 46.15h-3.37v6.25h3.37V125zm-.25 3.12V50.05h-6.25v78.07h6.25zm-3.12-74.95h3.37v-6.25h-3.37v6.25zm.25-3.12v25.42h6.24V50.05h-6.24zm3.12 28.55h16.42v-6.25h-16.42v6.25zm19.54-3.13V50.05h-6.24v25.42h6.24zm-3.12-22.3h3.37v-6.25h-3.37v6.25z"/>
        <ClickablePath fill="#f2f2f2" fillRule="nonzero" d="M235.27 147.3v121.45h-5.25v-116.2h-23.26v116.2h-5.25V147.3h33.76zm61.22 104.82c0 5.49-1.23 9.81-3.68 12.96-2.33 3.14-6.47 4.72-12.42 4.72h-4.02c-5.95 0-10.15-1.58-12.59-4.72-2.45-3.15-3.68-7.47-3.68-12.96V164.1c0-5.6 1.23-9.98 3.68-13.13 2.44-3.15 6.64-4.72 12.59-4.72h4.02c5.95 0 10.09 1.57 12.42 4.72 2.45 3.15 3.68 7.53 3.68 13.13v88.02zm-5.25-89.07c0-3.03-.82-5.72-2.45-8.05-1.52-2.33-4.14-3.5-7.87-3.5h-5.25c-3.73 0-6.41 1.17-8.04 3.5a14.42 14.42 0 00-2.28 8.05V253c0 3.03.76 5.72 2.28 8.05 1.63 2.33 4.31 3.5 8.04 3.5h5.25c3.73 0 6.35-1.17 7.87-3.5a13.71 13.71 0 002.45-8.05v-89.95zm66.79 89.07c0 5.49-1.23 9.81-3.68 12.96-2.33 3.14-6.47 4.72-12.41 4.72h-5.95c-5.95 0-10.15-1.58-12.59-4.72-2.45-3.15-3.68-7.47-3.68-12.96V218.7h5.25V253c0 3.03.76 5.72 2.27 8.05 1.64 2.33 4.32 3.5 8.05 3.5h7.17c3.73 0 6.36-1.17 7.87-3.5a13.71 13.71 0 002.45-8.05v-60.73h-21.51v-5.42h21.51v-23.8c0-3.03-.82-5.72-2.45-8.05-1.51-2.33-4.14-3.5-7.87-3.5h-7.17c-3.73 0-6.41 1.17-8.05 3.5a14.49 14.49 0 00-2.27 8.05v7.87h-5.25v-6.82c0-5.48 1.17-9.8 3.5-12.95 2.45-3.15 6.65-4.78 12.59-4.9h6.13c5.94 0 10.08 1.57 12.41 4.72 2.45 3.15 3.68 7.47 3.68 12.95v88.2zM418.2 147.3v5.25h-19.59v116.2h-5.25v-116.2h-19.42v-5.25h44.26z"/>
        <ClickablePath className="pen" fill="#f2f2f2" fillRule="nonzero" d="M79.26 232.09l2.55 1.69a57.66 57.66 0 0110.61-8.4c3.49-2.08 6.69-3.29 9.28-3.51 31.11-2.68 42.36-16.28 45.1-26.14l.42-1.54-1.55-.39-3.27-.82 5.27.06a15.8 15.8 0 01-.29 2.05 22.75 22.75 0 01-4.26 8.94c-5.38 7.15-17.14 16.15-42.83 22.53-10.05 2.49-16.69 7.01-22.04 13.93-5.07 6.55-8.96 15.24-13.58 26.18l-3.16-1.2 2.01-5.28c14.62-38.64 25.83-68.24 42.67-88.28a85.38 85.38 0 0110.87-10.89c-12.35 10.99-19.08 27.39-27.15 47.13-3.25 7.95-3.94 9.1-4.58 10.18l-.14.22c-.82 1.39-1.79 3.23-5.93 13.54zm46.7-77.45c15.02-9.18 34.26-13.72 60.81-13.25-4.5 11.92-10.83 20.82-22.29 32.52-3.81 3.88-10.04 7.89-15.42 10.97a176.14 176.14 0 01-9.51 5l-.14.07-.03.02h-.01l-.01.01h0l.52 2.37-4.47-1.12.64-.65c1.46-1.4 4.01-3.24 8.2-4.73a44.98 44.98 0 0011.38-6.5l1.21-.94c2.2-1.69 5.65-4.34 8.3-6.99a67.28 67.28 0 005.14-6.15 50.64 50.64 0 004.52-6.76c1.56-3.12 3.09-6.19 5.46-10.03l1.37-2.23-2.61-.15c-24.37-1.38-40.92 1.67-53.06 8.54z" stroke="#f2f2f2" stroke-width=".9" stroke-miterlimit="22.93"/>
        <ClickablePath fill="#f2f2f2" fillRule="nonzero" d="M184.33 268.75c20.92-15.23-76.52-20.31-120.25-3.13 68.72-15.62 129.6-8.96 109.32 4.69-81.21 54.69 178.04 40.63 284.24 20.32-173.35 26.56-335.77 23.61-273.31-21.88z"/>
        <ClickablePath fill="#f2f2f2" fillRule="nonzero" d="M64.08 265.62l-.57-1.45.92 2.98-.35-1.53zm120.25 3.13l.92 1.26-.92-1.26zm273.31 21.88l.29 1.53a1.57 1.57 0 00-.53-3.08l.24 1.55zM173.4 270.31l-.87-1.29.87 1.29zm-108.75-3.23c21.57-8.48 56.61-11.51 83.74-10.49 13.58.51 24.97 2.04 31.62 4.31 1.66.56 2.96 1.15 3.91 1.75a4.35 4.35 0 011.64 1.56c.15.32.18.65-.05 1.12a6.62 6.62 0 01-2.09 2.16l1.83 2.52a9.48 9.48 0 003.07-3.31 4.3 4.3 0 00.06-3.84 7.46 7.46 0 00-2.79-2.85 22.24 22.24 0 00-4.57-2.07c-7.1-2.43-18.87-3.96-32.51-4.47-27.3-1.03-62.84 1.99-85 10.7l1.14 2.91zm118.77.41c-7.86 5.72-12.55 11.01-13.89 15.94-.7 2.53-.5 4.95.56 7.18 1.06 2.2 2.9 4.11 5.33 5.77 4.84 3.31 12.35 5.88 21.92 7.82 9.61 1.94 21.46 3.29 35.12 4.07 54.62 3.11 138.68-2.81 225.42-16.1l-.48-3.09c-86.62 13.27-170.44 19.16-224.76 16.07-13.57-.78-25.26-2.11-34.68-4.02-9.45-1.91-16.46-4.38-20.77-7.33-2.15-1.46-3.54-2.99-4.28-4.54a6.95 6.95 0 01-.37-5.01c1.05-3.84 4.95-8.59 12.71-14.24l-1.83-2.52zm273.92 21.6c-52.99 10.14-144.25 18.72-212.08 17.94-16.95-.19-32.41-.97-45.44-2.45-13.05-1.49-23.53-3.67-30.6-6.61-3.54-1.47-6.1-3.08-7.7-4.8-1.57-1.68-2.21-3.42-2.02-5.3.19-1.95 1.29-4.3 3.72-7.06 2.41-2.76 6.04-5.82 11.05-9.2l-1.74-2.59c-5.14 3.46-9 6.69-11.66 9.73-2.65 3.02-4.2 5.96-4.48 8.82-.29 2.93.78 5.52 2.85 7.73 2.03 2.18 5.04 4 8.78 5.56 7.48 3.11 18.32 5.33 31.45 6.82 13.16 1.5 28.74 2.28 45.75 2.48 68.04.78 159.51-7.82 212.71-18l-.59-3.07zm-283.07-17.48c2.6-1.75 4.42-3.7 4.63-5.91.23-2.4-1.45-4.18-3.57-5.43-2.18-1.27-5.32-2.3-9.17-3.09-3.87-.8-8.57-1.39-13.94-1.75-21.45-1.43-54 .83-88.49 8.67l.7 3.05c34.23-7.79 66.48-10.01 87.58-8.6 5.27.35 9.82.92 13.52 1.69 3.72.77 6.47 1.71 8.22 2.73 1.8 1.06 2.09 1.91 2.04 2.43-.07.71-.78 1.95-3.26 3.62l1.74 2.59z"/>
    </g>
      </SvgButton>
    </LogoWrap>
);

Logo.propTypes = {
};

export default Logo;
