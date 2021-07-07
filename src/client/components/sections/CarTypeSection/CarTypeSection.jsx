import React from 'react';

import {car} from "./dataCarList";

import styles from "./CarTypeSections.module.scss"

function CarTypeSection(props) {
    const murkupCar = car.map(el => {
        return (
            <div style={{textAlign:"center",margin:"auto"}}>
                <img src={el.image} alt={el.caption} className={styles.image}/>
                <h2>{el.caption}</h2>
                <p>{el.text}</p>
            </div>
        )
    })
    return (
        <section className={styles.carSection}>
            <h2>Выберите авто которое подойдёт вам лучше?</h2>
            <p>Вы хотите перевезти что-то большое , или же проехать с комфортом в любую точку Украины?<br/>Тогда мы c радостью вам поможем  </p>
            <div className={styles.listTypeCar}>{murkupCar}</div>
        </section>
    );
}
export default CarTypeSection;