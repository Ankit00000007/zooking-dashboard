import React from 'react';
import "./MyStats.css";

const MyStats = () => {
    const stats = [
      {
        id: 1,
        title: "Level Bonus",
        description: "200",
      },
      {
        id: 2,
        title: "Main Wallet",
        description: "500",
      },
      {
        id: 3,
        title: "Fund Wallet",
        description: "500",
      },
    ];

  return (
    <>
      <div className="mm-container">
        <div className="mm-header">
          <h1 className="mm-title">My Stats</h1>
          <p className="mm-subtitle">
            CryptItan commerce is a SAAS ready crypto payment solution for your
            ecommerce business. It features the following highlights.
          </p>
        </div>

        <div className="mm-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="mm-card">
              <h3 className="mm-card-title my-text-center">{stat.title}</h3>
              <p className="mm-card-description my-text-center ">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyStats;
