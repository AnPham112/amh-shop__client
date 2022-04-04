import React from 'react'

function Button(props) {
  const { onClick, children } = props;
  const bg = props.bg ? 'btn--bg-' + props.bg : ''
  const shadow = props.shadow ? 'btn-shadow--' + props.shadow : ''
  const color = props.color ? 'btn--' + props.color : ''
  const padding = props.padding ? 'btn--padding-' + props.padding : ''
  const full = props.full ? 'btn--full-' + props.full : ''
  return (
    <button
      className={`btn ${color} ${bg} ${shadow} ${padding} ${full}`}
      onClick={onClick ? () => onClick() : null}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonLinearGradient(props) {
  const { onClick, children } = props
  // const size = props.size ? 'btn--' + props.size : ''
  const animate = props.animate ? 'btn-animate' : ''
  return (
    <button
      className={`btn btn--linear ${animate}`}
      onClick={onClick ? () => onClick() : null}
    >
      <span className="btn__txt">{children}</span>
      {
        props.icon
          ? (
            <span className="btn__icon">
              <i className={`fa-solid fa-${props.icon}`}></i>
            </span>
          )
          : null
      }
    </button>
  )
}

export default Button