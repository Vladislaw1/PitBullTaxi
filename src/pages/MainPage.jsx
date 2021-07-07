import React from 'react';
import Header from "../client/components/Header";
import Footer from "../client/components/Footer";

import TablePrice from "../client/components/TablePrice";
import InfoSections from "../client/components/sections/InfoSections";

import Slider from "../shared/components/Slider";
import CarTypeSection from "../client/components/sections/CarTypeSection";

import styles from "./MainPage.module.scss"

function MainPage(props) {
    return (
        <>
            <Header/>
            <button className={styles.fixedBtn}>Тел</button>
            <main>
                <Slider/>
                <CarTypeSection/>
                <InfoSections/>
                <TablePrice/>
            </main>
            <Footer/>
        </>
    );
}

export default MainPage;