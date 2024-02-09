import styled from 'styled-components'
import type { FabPropTypes } from './types'
import { FLEX_CENTER } from '../../globals/globals'
import { color, shapes } from '@cromaui/foundations'

export const CheckContainer = styled.div<FabPropTypes>`
  ${FLEX_CENTER}
  padding: 10px;
  background-color: ${({ size }) =>
    size === 'small' ? color.neutral[50] : color.blue.main};
  border-radius: ${shapes.full};
`
