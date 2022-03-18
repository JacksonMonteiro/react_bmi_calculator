import styles from './styles.module.css';

import { useState } from 'react';
import { levels, calculate, Level } from '../../helpers/imc';

import GridItem from '../GridItem';

import LeftArrowImg from '../../assets/leftarrow.png';


const LeftSide = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);

    function handleCalculateButton() {
        if (heightField && weightField) {
            setToShow(calculate(heightField, weightField));
        } else {
            window.alert("Digite todos os campos");
        }
    }

    function handleBackButton() {
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    }

    return (
        <>
            <div className={styles.left_side}>
                <h1>Calcule seu IMC</h1>
                <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundia de Saúde (OMS) para calcular o peso ideal de cada pessoa</p>

                <input
                    type='number'
                    placeholder='Digite a sua altura. Ex: 1.5 (Em metros)'
                    value={heightField > 0 ? heightField : ''}
                    onChange={e => setHeightField(parseFloat(e.target.value))}
                    disabled={toShow ? true : false}
                />

                <input
                    type='number'
                    placeholder='Digite o seu peso. Ex: 70 (Em kg)'
                    value={weightField > 0 ? weightField : ''}
                    onChange={e => setWeightField(parseFloat(e.target.value))}
                    disabled={toShow ? true : false}
                />

                <button onClick={handleCalculateButton}
                    disabled={toShow ? true : false}>
                    Calcular
                </button>
            </div>
            <div className={styles.right_side}>
                {!toShow &&
                    <div className={styles.grid}>
                        {levels.map((item, key) => (
                            <GridItem key={key} data={item} />
                        ))}
                    </div>
                }

                {toShow &&
                    <div className={styles.rightBig}>
                        <div className={styles.rightArrow} onClick={handleBackButton}>
                            <img src={LeftArrowImg} alt="Left Arrow Image" width={25} />
                        </div>
                        <GridItem data={toShow} />
                    </div>
                }
            </div>
        </>
    );
}

export default LeftSide;