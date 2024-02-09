import React, { useEffect, useRef, useState } from 'react'
import type { TooltipPropTypes } from './types'
import { ToolTipContainer, getPositionStyles } from './styles'

const Tooltip: React.FC<TooltipPropTypes> = ({
  children,
  label,
  position = 'bottom'
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible && containerRef.current && tooltipRef.current) {
      const positionStyles = getPositionStyles(position)
      tooltipRef.current.style.top = positionStyles.top
    }
  }, [isVisible, location])

  const showTooltip = (): void => {
    setIsVisible(true)
  }

  const hideTooltip = (): void => {
    setIsVisible(false)
  }

  return (
    <ToolTipContainer
      ref={containerRef}
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      position={position}
      label={label}
    >
      {children}
      {isVisible && (
        <div ref={tooltipRef} className="tooltip">
          {label}
        </div>
      )}
    </ToolTipContainer>
  )
}

export default Tooltip
