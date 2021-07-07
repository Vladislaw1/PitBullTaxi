import React from 'react';

import styles from "./Header.module.scss"
import Logo from "../../../shared/components/Logo";

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
                <ul>
                    <li>
                        <a href="tel:0972944469"> 0972944469</a>
                    </li>
                    <li>
                        <a href="tel:067113016"> 067113016</a>
                    </li>
                    <li>
                        <a href="tel:0636546393"> 0636546393</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;