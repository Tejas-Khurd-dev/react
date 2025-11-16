import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Tejas Sandeep Khurd</h2>
      <ul>
        <li>Home</li>
        <li>shop</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

export default Header