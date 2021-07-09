import React from 'react';

import styles from "./PriceSection.module.scss"
import TablePrice from "../../TablePrice";

function PriceSection(props) {
    return (
        <section>
        <div>
            <TablePrice/>
        </div>
        <div>
            <p>Подача такси в Киев 150 грн, Борисполь 400 грн</p>
        </div>
        </section>
    );
}

export default PriceSection;