import React from "react";
import "./RankReward.css";

const RankReward = () => {
  const steps = [
    {
      id: 2,
      price: "$ 110",
      title: "5 / 50",
      titlee: "2 / 25",
      progress1: (5 / 50) * 100,
      progress2: (2 / 25) * 100,
    },
    {
      id: 1,
      price: "$ 570",
      title: "5 / 50",
      titlee: "2 / 25",
      progress1: (5 / 50) * 100,
      progress2: (2 / 25) * 100,
    },
    {
      id: 1,
      price: "$ 1150",
      title: "5 / 50",
      titlee: "2 / 25",
      progress1: (5 / 50) * 100,
      progress2: (2 / 25) * 100,
    },
  ];

  return (
    <div className="mm-container1">
      <div className="mm-header1">
        <h1 className="mm-title1">Rank & Reward</h1>
      </div>
      <div className="mm-grid1">
        {steps.map((step) => (
          <div key={step.id} className="mm-card1">
            <div className="mm-card-header1">
              <div className="mm-icon1">{step.price}</div>
              <div className="mm-step1">
                L {String(step.id).padStart(2, " ")}
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${step.progress1}%` }}
                >
                  <span className="progress-text">{step.title}</span>
                </div>
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${step.progress2}%` }}
                >
                  <span className="progress-text">{step.titlee}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankReward;
