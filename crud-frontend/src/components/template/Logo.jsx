import './Logo.css'
import logo from '../../assets/imgs/logo.jpg'
import { Link } from 'react-router-dom'

const Logo = () => (
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>
)

export default Logo
    