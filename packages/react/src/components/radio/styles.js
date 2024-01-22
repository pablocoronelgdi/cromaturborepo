import {
    Borders,
    Color,
    Opacities,
    Shapes,
    Spacings,
  } from "@cromaui/foundations";
  import { css } from "styled-components";
  
  /*
   * INDICE:
   *
   * ESTILOS DE COMPONENTES
   *
   * - Radio Container (div)
   * - Radio Area (label)
   * - Radio Input (input Radiobox)
   */
  
  /* ----------  Radio Container  (div) ---------- */
  
  export const radioContainer = (props) => {
    // ESTILOS BASE
    const base = css`
      position: relative;
      display: inline-flex;
      width: ${Spacings.space40};
      height: ${Spacings.space40};
      padding: ${Spacings.space8};
      border-radius: ${Shapes.full};
      &:hover {
        background-color: ${Color.Navy.soft}${Opacities.opacity20};
      }
    `;
  
    // DISABLED
    const disabled = css`
      &:hover {
        background-color: transparent;
      }
    `;
  
    // PRESSED
    const pressed = css`
      &:hover {
        background-color: ${Color.Neutral[600]}${Opacities.opacity20};
      }
    `;
  
    if (props.disabled) {
      return css`
        ${base}
        ${disabled}
      `;
    }
    if (props.isPressed) {
      return css`
        ${base}
        ${pressed}
      `;
    }
    return css`
      ${base}
    `;
  };
  
  /* ----------  Radio Area  (label) ---------- */
  
  export const radioArea = (props) => {
    //ESTILOS BASE
    const base = css`
      width: ${Spacings.space24};
      height: ${Spacings.space24};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${Shapes.full};
      &:focus-within {
        outline: ${Borders.br2}${Color.Blue.main};
        outline-offset: -1px;
        
      }
    `;
    //DISABLED
    const disabled = css`
      & span {
        color: ${Color.Neutral[400]};
      }
    `;
    return css`
      ${base}
    `;
  };
  
  /* ----------  Radio Input  (input radiobox) ---------- */
  
  export const radioInput = (props) => {
    return css`
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    `;
  };
  