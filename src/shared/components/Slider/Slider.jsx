import React, {useState} from "react";
import {imgSlider} from "./dataSlider"

import styles from './Slider.module.scss'

function Slider() {
    const [current, setCurrent] = useState(0)

    function nextImage() {
        setCurrent(current === imgSlider.length - 1 ? 0 : current + 1)
    }

    function prevImage() {
        setCurrent(current === 0 ? imgSlider.length - 1 : current - 1)
    }

    const image = imgSlider.map((el, idx) => {
        return (
            <>
                {idx === current && (
                    <div className={idx === current ? "sliderContent active" : "sliderContent"}>
                        <img src={el.image} alt={el.altText} className={styles.image}/>
                        <div className={styles.textSlider}>
                            <h2>{el.caption}</h2>
                            <p >{el.text}</p>
                        </div>
                    </div>
                )}
            </>
        )
    })

    return (
        <section className={styles.slider}>
            <button className={styles.nextImg} onClick={nextImage}>Next</button>
            {image}
            <button className={styles.prevImg} onClick={prevImage}>Prev</button>
        </section>
    )
}

export default Slider;