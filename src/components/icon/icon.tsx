import './icon.css'
import { ICONS, type IconName } from './icons'

export interface IconProps {
  name: IconName
  size?: number
  className?: string
  'aria-label'?: string
}

export function Icon({ name, size = 16, className, 'aria-label': ariaLabel }: IconProps) {
  const src = ICONS[name]
  if (import.meta.env.DEV && !src) {
    console.warn(`Icon: unknown icon name "${name}"`)
  }

  return (
    <span
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={['icon', className].filter(Boolean).join(' ')}
      style={
        {
          width: size,
          height: size,
          '--icon-src': `url("${src}")`,
        } as React.CSSProperties
      }
    />
  )
}
