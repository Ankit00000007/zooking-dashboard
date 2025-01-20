import React from 'react';
import "./Packages.css";

const Packages = () => {
    const plans = [
      {
        id: 1,
        iconColor: "#00f2fe",
        title: "No Minting",
        priceRange: "$ 51",
      },
      {
        id: 1,
        iconColor: "#00f2fe",
        title: "270 Days",
        priceRange: "$ 110",
      },
      {
        id: 1,
        iconColor: "#00f2fe",
        title: "210 Days",
        priceRange: "$ 570",
      },
      {
        id: 1,
        iconColor: "#00f2fe",
        title: "160 Days",
        priceRange: "$ 1170",
      },
    ];
  return (
    <div>
      <div className="ip-container">
        <div className="ip-header">
          <h1 className="ip-title">Packages</h1>
          <p className="ip-subtitle">
            Investment should be carefully made depending and considering many
            things.
          </p>
        </div>

        <div className="ip-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="ip-card">
              <div className="my-flex">
                <div className="ip-price">{plan.priceRange}</div>
                <h3 className="ip-card-title">{plan.title}</h3>
              </div>
              <div>
                <button className="ip-invest-btn">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packages
