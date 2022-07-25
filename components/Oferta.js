import React from 'react'
import styles from './Oferta.module.css'

function Oferta(
  props
) {
  return (
    <div className={[styles['main-container'],styles[props.src]].join(" ")} style={{backgroundImage: (props.src)}}>
      <div className={styles['label']}>
        {props.label}
      </div>
    </div>
  )
}

export default Oferta