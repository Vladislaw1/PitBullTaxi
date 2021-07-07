import React from 'react';

import {contact} from "./dataContact";
import ListContactItem from "../ListContactItem";

function ListContact(props) {
    const contactListEl = contact.map(el => <ListContactItem contact={el}/>)
    return (
        <>
            <ul>
                {contactListEl}
            </ul>
        </>
    );
}

export default ListContact;