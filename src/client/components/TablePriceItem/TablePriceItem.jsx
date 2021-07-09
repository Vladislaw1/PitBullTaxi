import React from 'react';

import data from "./dataPrice.json"

import styles from "./TablePriceItem.module.scss"

function TablePriceItem(props) {
    return (
        <tbody>
        <tr>
            <td colSpan={3}>Тариф базовый от 175 км</td>
            <td>8 грн/км</td>
            <td>6 грн/км</td>
            <td>9 грн/км</td>
            <td>7 грн/км</td>
        </tr>
        <tr>
            <td colSpan={3}>Тариф базовый 75-175 км</td>
            <td>9 грн/км</td>
            <td>7 грн/км</td>
            <td>10 грн/км</td>
            <td>8 грн/км</td>
        </tr>
        <tr>
            <td colSpan={3}>Тариф базовый до 75 км</td>
            <td>10 грн/км</td>
            <td>8 грн/км</td>
            <td>11 грн/км</td>
            <td>9 грн/км</td>
        </tr>
        <tr>
            <td colSpan={3}>Тариф бездорожье в сухую погоду</td>
            <td>15 грн/км</td>
            <td>10 грн/км</td>
            <td>20 грн/км</td>
            <td>15 грн/км</td>
        </tr>
        <tr>
            <td colSpan={3}>Тариф бездорожье дождь лёд снег</td>
            <td>20 грн/км</td>
            <td>15 грн/км</td>
            <td>30 грн/км</td>
            <td>20 грн/км</td>
        </tr>
        </tbody>
    );
}

export default TablePriceItem;