import React from 'react';

function TablePrice(props) {
    return (
        <>
            <table style={{border: "2px solid black"}}>
                <thead>
                <tr>
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
                <tbody>
                    <td>Первый</td>
                    <td>Второй</td>
                    <td>Третий</td>
                    <td>Четвёртый</td>
                </tbody>
            </table>
        </>
    );
}

export default TablePrice;