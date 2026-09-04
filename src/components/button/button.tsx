import './button.css'
import { Icon } from '../icon/icon'
import type { IconName } from '../icon/icons'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'success' | 'error'
export type ButtonSize = 'medium' | 'small'

export interface ButtonProps {
  /** Visual style of the button. Defaults to "primary". */
  variant?: ButtonVariant
  size?: ButtonSize
  /** Bold text — the button's main label. Omit (with no supportingText) for an icon-only round button. */
  text?: string
  /** Regular-weight text shown before the bold text. */
  supportingText?: string
  leftIcon?: IconName
  rightIcon?: IconName
  disabled?: boolean
  onClick?: () => void
  /** Native button type. Defaults to "button" so it never submits a form by accident. */
  type?: 'button' | 'submit' | 'reset'
  className?: string
  'aria-label'?: string
}

export function Button({
  variant = 'primary',
  size = 'medium',
  text,
  supportingText,
  leftIcon,
  rightIcon,
  disabled = false,
  onClick,
  type = 'button',
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const isRounded = !text && !supportingText
  const iconSize = size === 'small' ? 12 : 16

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={[
        'button',
        `button--${variant}`,
        `button--${size}`,
        isRounded ? 'button--round' : 'button--pill',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="button__inner">
        {leftIcon && <Icon name={leftIcon} size={iconSize} />}
        {supportingText && (
          <span className="button__text button__text--regular">{supportingText}</span>
        )}
        {text && <span className="button__text button__text--bold">{text}</span>}
        {rightIcon && <Icon name={rightIcon} size={iconSize} />}
      </span>
    </button>
  )
}
