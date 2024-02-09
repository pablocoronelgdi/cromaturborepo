import styled, { css } from 'styled-components'
import type { TooltipPropTypes } from './types'

export const getPositionStyles = (position: string): unknown => {
  const containerRect = document
    .querySelector('.tooltip-container')
    ?.getBoundingClientRect()

  const tooltipRect = document
    .querySelector('.tooltip')
    ?.getBoundingClientRect()
  console.log(document.querySelector('.tooltip')?.getBoundingClientRect())
  if (!containerRect || !tooltipRect) {
    return css``
  }

  const leftSpace = containerRect.left - tooltipRect.width
  /*   const rightSpace = window.innerWidth - containerRect.right - tooltipRect.width
  const topSpace = containerRect.top - tooltipRect.height
  const bottomSpace =
    window.innerHeight - containerRect.bottom - tooltipRect.height */

  switch (position) {
    case 'left':
      return leftSpace >= 0
        ? {
            top: '50%',
            left: '-100%',
            transform: 'translateY(-50%)'
          }
        : {
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)'
          }
    default:
      return {
        top: '100%',
        left: ' 50%',
        transform: 'translateX(-50%)'
      }
  }
}

export const ToolTipContainer = styled.div<TooltipPropTypes>`
  position: relative;
  display: inline-block;

  & div.tooltip {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    z-index: 1;
    white-space: nowrap;
    font-size: 14px;
    display: block;
  }

  &:hover .tooltip {
    display: block;
  }
`
