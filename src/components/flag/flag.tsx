import './flag.css'
import { FLAGS, type FlagName } from './flags'

export interface FlagProps {
  name: FlagName
  size?: number
  className?: string
  'aria-label'?: string
}

export function Flag({ name, size = 16, className, 'aria-label': ariaLabel }: FlagProps) {
  const src = FLAGS[name]
  if (import.meta.env.DEV && !src) {
    console.warn(`Flag: unknown flag name "${name}"`)
  }

  return (
    <img
      src={src}
      alt={ariaLabel ?? ''}
      aria-hidden={ariaLabel ? undefined : true}
      className={['flag', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
    />
  )
}
