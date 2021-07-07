import React from 'react';
import Logo from "../../../shared/components/Logo";

import styles from "./Footer.module.scss"

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div>
                <Logo/>
            </div>
            <div>
                <ul className={styles.socialList}>
                    <li className={styles.socialListItem}><a
                        href="https://invite.viber.com/?g=7B01ZxG3Tkv174xujmcvt163ggekbtcV">Viber</a>
                    </li>
                    <li className={styles.socialListItem}><a
                        href="https://t.me/joinchat/3xy0R9IDtUVmYjIy">Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;