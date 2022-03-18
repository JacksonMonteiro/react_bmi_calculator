import styles from './styles.module.css';

import { levels } from '../../helpers/imc';
import GridItem from '../GridItem';

const RightSide = () => {
    return(
        <div className={styles.right_side}>
            <div className={styles.grid}>
                {levels.map((item, key) => (
                    <GridItem key={key} data={item} />
                ))}
            </div>
        </div>
    );
}

export default RightSide;