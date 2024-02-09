import React from 'react'
import { Icon } from '../icon'
import type { FabPropTypes } from './types'

const FloatinButton: React.FC<FabPropTypes> = ({
  iconName = 'add',
  size = 'large'
}) => {
  return (
    <div>
      <Icon size={size === 'small' ? 'medium' : 'large'} name={iconName} />
    </div>
  )
}

export default FloatinButton
