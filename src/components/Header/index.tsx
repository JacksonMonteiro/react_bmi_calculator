import poweredImage from '../../assets/powered.png';
import styles from './styles.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <img src={poweredImage} alt="Logo" width={150} />
            </div>
        </header>
    );
}

export default Header;