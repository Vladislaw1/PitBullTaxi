import React from 'react';

import {ReactComponent as Kievstar} from "../../../images/icon/contact/kievstar.svg";
// import {ReactComponent as Lifecell} from "../../../images/icon/contact/life.svg";

import styles from "./ListContactItem.module.scss"

function ListContactItem({contact}) {
    return (
        <li className={styles.contactListItem}>
            {/*<Kievstar className={styles.icon}/>*/}
            <a href={contact.href} className={styles.contactListItemLink}>{contact.number}</a>
        </li>
    );
}

export default ListContactItem;