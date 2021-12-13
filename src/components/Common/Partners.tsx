import React from "react";
import Button from "./Button";
import "./Partners.css"
import PartnersImage from '../../assets/partners/partners.svg'

const Partners = () => {
    return (
        <div className="partners">
            <div className="row">
                <div className="col-md-6 my-auto">
                    <h1 style={{ color: "#ffffff", fontWeight: "bold" }}>Partners and Donations</h1>
                    <p style={{ color: "#ffffff" }}>GORILLA INUs mission is to bring cryptocurrency concepts to the masses and help with adoption of blockchain services. Unlike other cryptocurrencies the GORILLA INU will allocate 1% of the token supply to donate to Gorilla protection organizations around the world. </p>
                    <Button filled={true} onClick={false} clickFunction={() => { }} text="Donate Now" />
                </div>
                <div className="col-md-6 my-auto">
                    <div className="partners-img-hldr">
                        <img className="partners-img" src={PartnersImage} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Partners