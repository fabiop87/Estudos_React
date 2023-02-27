import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
function Navbar() {
    return (
        <div className={styles.navbar}>

        
        <ul>
            <li>
                <Link to='/'>OMNI</Link>
            </li>
            <li>
                <Link to='/Aqua'>AQUA</Link>
            </li>
            <li>
                <Link to='/Rebirth'>REBIRTH</Link>
            </li>
        </ul>
        </div>
    )
}
export default Navbar;