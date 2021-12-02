import React from "react";
import "./Nft.css"
import { Card } from "@mui/material";
import Banana from "../assets/nft/banana.svg"
import Verified from "../assets/nft/verified.svg"

const Nft = () => {
    return (
        <div className="nft">
            <div className="row">
                <div className="col-md-6 my-auto">
                    <Card style={{ backgroundColor: "#030D18", width: "fit-content", margin:"0 auto" }}>
                        <div className="nft-img-card">
                            < img className="nft-img" src={Banana} />
                        </div>
                        <div className="" style={{ padding: "10px 15px" }}>
                            <div className="nft-name">
                                <p style={{ fontSize: "0.8rem", color: "#ffffff", margin: "0 10px 0 0", }}>The Gorilla-inu</p>
                                <img className="nft-verified" src={Verified} />
                            </div>
                            <h3 style={{ fontWeight: "bold", color: "#ffffff" }}>Banana for Gorilla</h3>
                            <div className="nft-footer">
                                <div>
                                    <button className="buy-nft-btn">Buy Now</button>
                                </div>
                                <div>
                                    <p style={{ color: "#ffffff", margin: "0" }}> <span style={{ color: "#9B9B9B", fontSize: "0.8rem" }}> $135.4 </span> 0.37 ETH</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-6 my-auto">
                    <h1 style={{color:"#ffffff"}}> Nfts for Sale in GorillaInu.app</h1>
                    <h1 style={{color:"#ffffff", marginTop:"50px"}}> Nft Store</h1>
                    <p style={{color:"#ffffff"}}>GORILLA INUs mission is to bring cryptocurrency concepts to the masses and help with adoption of blockchain services. Unlike other cryptocurrencies the GORILLA INU will allocate 1% of the token supply to donate to Gorilla protection organizations around the world. </p>
                </div>
            </div >
        </div >
    )
}

export default Nft