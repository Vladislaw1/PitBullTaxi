import React, {useState} from 'react';

import styles from "./TablePrice.module.scss"
import TablePriceItem from "../TablePriceItem";

function TablePrice(props) {

    return (
        <>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th colSpan={3} rowSpan={2}></th>
                        <th colSpan={"2"}>День</th>
                        <th colSpan={"2"}>День-Ночь</th>
                    </tr>
                    <tr>
                        <th>Туда</th>
                        <th>Туда-Обратно</th>
                        <th>Туда</th>
                        <th>Туда-Обратно</th>
                    </tr>
                </thead>
                <TablePriceItem/>
            </table>
        </>
    );
}

export default TablePrice;