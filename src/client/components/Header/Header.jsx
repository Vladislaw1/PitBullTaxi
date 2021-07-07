import React from 'react';

import styles from "./Header.module.scss"
import Logo from "../../../shared/components/Logo";
import ListContact from "../ListContact";

function Header(props) {
    return (
        <header className={styles.header}>
            <div>
                <Logo/>
            </div>
            <div>
                <button>Записаться</button>
            </div>
            <div>
                <ListContact/>
            </div>
        </header>
    );
}

export default Header;