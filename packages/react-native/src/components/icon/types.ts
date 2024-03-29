import type { MaterialIcons } from '@expo/vector-icons'

export type IconSizeType = 'small' | 'medium' | 'large' | 'extra-large'
export type IconColorType = string
export type IconPropTypes = {
  name: keyof typeof MaterialIcons.glyphMap
  size?: IconSizeType
  color?: IconColorType
  style?: object
  theme?: object
}
