import React from 'react';
import Header from "../client/components/Header";
import Footer from "../client/components/Footer";

import InfoSections from "../client/components/sections/InfoSections";

import Slider from "../shared/components/Slider";
import CarTypeSection from "../client/components/sections/CarTypeSection";

import styles from "./MainPage.module.scss"
import PriceSection from "../client/components/sections/PriceSection";

function MainPage(props) {
    return (
        <>
            <Header/>
            <button className={styles.fixedBtn}>Тел</button>
            <main>
                <Slider/>
                <CarTypeSection/>
                <InfoSections/>
                <PriceSection/>
            </main>
            <Footer/>
        </>
    );
}

export default MainPage;