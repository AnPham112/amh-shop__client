import React from 'react'

function Button(props) {
  const { onClick, children } = props
  const bg = props.backgroundColor ? 'btn--' + props.backgroundColor : ''
  const size = props.size ? 'btn--' + props.size : ''
  const animate = props.animate ? 'btn-animate' : ''
  const shadow = props.shadowColor ? 'btn-shadow--' + props.shadowColor : ''
  return (
    <button
      className={`btn ${bg} ${size} ${animate} ${shadow}`}
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