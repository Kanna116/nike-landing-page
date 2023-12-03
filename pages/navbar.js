import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faHome, faMoon, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = (props) => {
    const styles = {
        borderRadius: '100px',
        padding: '12px',
        height: '20px',
        aspectRatio: '1',
    }
    return (
        <nav className={`w-screen h-16 flex items-center justify-between px-12 border-b-2  z-10 fixed top-0 left-0 ${props.theme ? 'bg-black text-white border-white' : 'bg-white text-black border-black'}`}>
            <div className='nav-left w-1/4 flex items-center justify-evenly'>
                <FontAwesomeIcon icon={faInstagram} style={styles} />
                <FontAwesomeIcon icon={faFacebook} style={styles} />
                <FontAwesomeIcon icon={faTwitter} style={styles} />
                <FontAwesomeIcon icon={faGlobe} style={styles} />

            </div>
            <div className='nav-right w-1/6 flex items-center justify-between'>
                <FontAwesomeIcon icon={faMoon} style={styles} onClick={props.darkMode} />
                <FontAwesomeIcon icon={faSearch} style={styles} />
                <FontAwesomeIcon icon={faHome} style={styles} />
                <FontAwesomeIcon icon={faShoppingCart} style={styles} />
            </div>


        </nav>
    )
}

export default Navbar