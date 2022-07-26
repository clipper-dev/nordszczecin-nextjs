import React from 'react'
import { useWindowSize } from '../utils/CustomHooks';
import styles from './OfertaCard.module.css'

function OfertaCard(
  props
) {
  const size = useWindowSize();
  return (
    <div className={styles['row-container']}>
      {size.width > 600 ?
      <>
      {props.side === "left" ?
        <>
          <div className={[styles['main-container'], styles[props.src]].join(" ")} style={{ backgroundImage: (props.src) }}>
            <div className={styles['label']}>
              {props.label}
            </div>
          </div>
          <div className={styles['text-container']}>
            {props.children}
          </div>
        </>
        :
        <>
          <div className={styles['text-container']}>
            {props.children}
          </div>
          <div className={[styles['main-container'], styles[props.src]].join(" ")} style={{ backgroundImage: (props.src) }}>
            <div className={styles['label']}>
              {props.label}
            </div>
          </div>
        </>}
      </>
      :
      <>
      <div className={styles['outer-container']}>

      <div className={[styles['main-container'], styles[props.src]].join(" ")} style={{ backgroundImage: (props.src) }}>
            <div className={styles['label']}>
              {props.label}
            </div>
          </div>
          <div className={styles['text-container']}>
            {props.children}
          </div>
      </div>
      </>  
    }
    </div>
  )
}

export default OfertaCard