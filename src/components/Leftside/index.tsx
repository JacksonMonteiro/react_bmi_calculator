import { useState } from 'react';
import styles from './styles.module.css';

const LeftSide = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    function handleCalculateButton() {
        if (heightField && weightField) {
            
        } else {
            window.alert("Digite todos os campos");
        }
    }

    return (
        <div className={styles.left_side}>
            <h1>Calcule seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundia de Saúde (OMS) para calcular o peso ideal de cada pessoa</p>

            <input
                type='number'
                placeholder='Digite a sua altura. Ex: 1.5 (Em metros)'
                value={heightField > 0 ? heightField : ''}
                onChange={e => setHeightField(parseFloat(e.target.value))}
            />

            <input
                type='number'
                placeholder='Digite o seu peso. Ex: 70 (Em kg)'
                value={weightField > 0 ? weightField : ''}
                onChange={e => setWeightField(parseFloat(e.target.value))}
            />

            <button onClick={handleCalculateButton}>Calcular</button>
        </div>
    );
}

export default LeftSide;