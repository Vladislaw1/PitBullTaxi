import React from 'react';
import Header from "../client/components/Header";
import Footer from "../client/components/Footer";

import TablePrice from "../client/components/TablePrice";
import InfoSections from "../client/components/sections/InfoSections";

import Slider from "../shared/components/Slider";
import CarTypeSection from "../client/components/sections/CarTypeSection";

function MainPage(props) {
    return (
        <>
            <Header/>
            <button style={{position:"absolute",right:"50px",bottom:"100px"}}>Тел</button>
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