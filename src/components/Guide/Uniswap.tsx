import React from "react";

const Uniswap = () => {
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <iframe
          src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
          height="660px"
          width="100%"
          style={{
            border: "0",
            margin: "0 auto",
            marginBottom: "0.5rem",
            display: "block",
            borderRadius: "10px",
            maxWidth: "100%",
            minWidth: "300px",
          }}
        />
      </div>
    </div>
  );
};

export default Uniswap;
