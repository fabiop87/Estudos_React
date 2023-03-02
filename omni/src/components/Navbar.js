import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import Container from "./Container";
function Navbar() {
    return (
        <div className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>OMNI</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Aqua'>AQUA</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Rebirth'>REBIRTH</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/HolyLand'>HOLY LAND</Link>
                    </li>
                </ul>
            </Container>

        </div>
    )
}
export default Navbar;