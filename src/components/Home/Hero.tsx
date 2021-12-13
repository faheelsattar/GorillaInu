import React from "react";
import "./Hero.css"
import background from "../../assets/bg/mainbg.png";
import Button from "../Common/Button";

const Hero = () => {
    return (
        <div className="main-bg" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-sec">
                <div className="hero-text">
                    <h1>Gorrila Inu</h1>
                    <h2>Saves Actual Gorillas</h2>
                    <p>GORILLA INU was created on 21st October 2021 @ 10PM UTC with the</p>
                    <p> goal of being a decentralized meme project with real world value.
                    </p>
                </div>
                <div className="hero-btn-hldr">
                    <div className="buy-hldr">
                        <Button filled={true} onClick={false} clickFunction={() => { }} text="Buy" />
                    </div>
                    <div className="gor-hldr">
                        <Button filled={false} onClick={false} clickFunction={() => { }} text="Gorilla Paper" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero