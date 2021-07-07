import React from 'react';

import {contact} from "./dataContact";
import ListContactItem from "../ListContactItem";

import styles from "./ListContact.module.scss"

function ListContact(props) {
    const contactListEl = contact.map(el => <ListContactItem contact={el}/>)
    return (
        <>
            <ul className={styles.contact_list}>
                {contactListEl}
            </ul>
        </>
    );
}

export default ListContact;