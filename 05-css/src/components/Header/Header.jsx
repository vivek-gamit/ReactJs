import React from 'react'
import styles from '../../styles/Header/Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <h2>Amazon</h2>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
