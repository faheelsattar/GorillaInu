import React from "react";
import "./Stepper.css"
import Bigwave from '../assets/roadmap/bigwave.svg'

const Stepper = () => {
    const phases = [1, 2, 3].map(data => {
        return (
            <div>
                <p className="phase-title">Phase 1</p>
                <div className="phase-img-hldr">
                    <img className="phase-img" src={Bigwave} />
                </div>
                <div className="phase-data">
                    <ul className="phase-data-list">
                        <ol>
                           1. Stealth launch on Uniswap V2
                        </ol>
                        <ol>
                           2. Stealth launch on Uniswap V2
                        </ol>
                        <ol>
                           3. Stealth launch on Uniswap V2
                        </ol>
                        <ol>
                           4. Stealth launch on Uniswap V2
                        </ol>
                        <ol>
                           5. Stealth launch on Uniswap V2
                        </ol>
                        <ol>
                           6. Stealth launch on Uniswap V2
                        </ol>
                        <ol>
                           7. Stealth launch on Uniswap V2
                        </ol>
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div className="stepper">
            <div className="line-hldr">
                <hr className="filled-line" />
                <hr className="dotted-line" />
                <hr className="dotted-line" />
                <hr className="dotted-line" />
            </div>
            <div className="phases-hldr">
                {phases}
            </div>
        </div>
    )
}

export default Stepper