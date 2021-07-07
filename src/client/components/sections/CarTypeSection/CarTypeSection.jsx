import React from 'react';

import {car} from "./dataCarList";

import styles from "./CarTypeSections.module.scss"

function CarTypeSection(props) {
    const murkupCar = car.map(el => {
        return (
            <div style={{textAlign:"center",width:"400px",margin:"auto"}}>
                <img src={el.image} alt={el.caption} className={styles.image}/>
                <h2>{el.caption}</h2>
                <p>{el.text}</p>
            </div>
        )
    })
    return (
        <section style={{padding:"40px 0px"}}>
            <h2>Выберите авто которое подойдёт вам лучше?</h2>
            <p>Вы хотите перевезти что-то большое , или же проехать с комфортом в любую точку украины?<br/>Тогда мы c радостью вам поможем  </p>
            <div style={{display:"flex"}}>{murkupCar}</div>
        </section>
    );
}
export default CarTypeSection;