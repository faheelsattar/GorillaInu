import React from "react";
import "./Hero.css"
import background from "../../assets/bg/mainbg.png";
import Button from "../Common/Button";
import { useQuery } from "@apollo/client";
import { HERO_QUERY } from "../../apollo/query";

const Hero = () => {
    const { loading, error, data } = useQuery(HERO_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div className="main-bg" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-sec">
                <div className="hero-text">
                    <h1>{data.heroes[0].heading}</h1>
                    <h2>{data.heroes[0].subheading}</h2>
                    <p> {data.heroes[0].herotext}</p>
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