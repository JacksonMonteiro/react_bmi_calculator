import { Level } from "../../helpers/imc";

import styles from './styles.module.css';

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    data: Level
}

const GridItem = ({ data }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: data.color }}>
            <div className={styles.gridIcon}>
                <img src={data.icon === 'up' ? upImage : downImage} alt={data.icon === 'up' ? 'Up Icon Image' : 'Down Icon Image'} width="30" />
            </div>

        	{data.userImc && 
                <div className={styles.userImc}>
                    Seu IMC é de: {data.userImc} Kg/m²
                </div>
            }

            <div className={styles.gridTitle}>
                {data.title}
            </div>

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}


export default GridItem;