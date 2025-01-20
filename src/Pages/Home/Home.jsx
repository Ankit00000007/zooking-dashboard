import React, { useState, useEffect } from "react";
import {
  UserCircle2,
  Shield,
  Headphones,
  Building2,
  DollarSign,
  Briefcase,
} from "lucide-react";
import SliderBg1 from "../../Images/slider-bg.jpg";
import SliderBg2 from "../../Images/slider-bg1.jpg";
import SliderBg3 from "../../Images/slider-bg2.jpg";
import SliderBg1Mobile from "../../Images/slider-bg-mobile.png"; 
import SliderBg2Mobile from "../../Images/slider-bg1-mobile.png";
import SliderBg3Mobile from "../../Images/slider-bg3-mobile.png";
import BtcCircle from "../../Images/btc-svg.svg";
import Btcpurple from "../../Images/Bitcoin-purple.png";
import Btcred from "../../Images/Bitcoin-red.png";
import Btccyan from "../../Images/Bitcoin-cyan.png";
import MyStats from "../../Component/MyStats/MyStats";
import RankReward from "../../Component/RankReward/RankReward";
import Packages from "../../Component/Packages/Packages";
import Spons1 from "../../Images/spons1.png";
import Spons2 from "../../Images/spons2.png";
import Testimonial1 from "../../Images/testimonial-img1.png";
import Testimonial2 from "../../Images/testimonial-img2.png";
import Testimonial3 from "../../Images/testimonial-img3.png";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const slides = [
    {
      title: "Bitcoin is the first decentralized cryptocurrency,",
      subtitle: "our Gateway to Smart Crypto Investments",
      description:
        "Bitcoin is the first decentralized cryptocurrency, created by an unknown person or group of people using the name Satoshi Nakamoto in 2008. It allows peer-to-peer transactions without the need for intermediaries.",
      welcomeText: "Welcome to Crypto Investment",
      backgroundImage: SliderBg1,
      mobileBackgroundImage: SliderBg1Mobile,
    },
    {
      title: "Secure Your Financial Future",
      subtitle: "with Smart Cryptocurrency Investments",
      description:
        "Explore the world of digital assets with our comprehensive investment platform. Start your journey to financial freedom today.",
      welcomeText: "Welcome to Smart Investing",
      backgroundImage: SliderBg2,
      mobileBackgroundImage: SliderBg2Mobile,
    },
    {
      title: "Trade with Confidence",
      subtitle: "Your Trusted Crypto Trading Platform",
      description:
        "Experience seamless trading with advanced tools and real-time market data. Join thousands of successful traders on our platform.",
      welcomeText: "Welcome to Crypto Trading",
      backgroundImage: SliderBg3,
      mobileBackgroundImage: SliderBg3Mobile,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const paymentMethods = [
    { id: 1, name: "CoinPayments", logo: Spons1 },
    { id: 2, name: "Stripe", logo: Spons2 },
    { id: 3, name: "CoinPayments", logo: Spons1 },
    { id: 4, name: "Stripe", logo: Spons2 },
    { id: 5, name: "CoinPayments", logo: Spons1 },
  ];

  const features = [
    {
      id: 1,
      icon: <UserCircle2 size={28} />,
      title: "Merchant Account",
      description:
        "Specify your shop type and apply to upgrade your standard account to a merchant account.",
    },
    {
      id: 2,
      icon: <Shield size={28} />,
      title: "Security Protected",
      description:
        "Specify your shop type and apply to upgrade your standard account to a merchant account.",
    },
    {
      id: 3,
      icon: <Headphones size={28} />,
      title: "Support 24/7",
      description:
        "Specify your shop type and apply to upgrade your standard account to a merchant account.",
    },
    {
      id: 4,
      icon: <Building2 size={28} />,
      title: "Registered Company",
      description:
        "Specify your shop type and apply to upgrade your standard account to a merchant account.",
    },
    {
      id: 5,
      icon: <DollarSign size={28} />,
      title: "Live Exchange Rates",
      description:
        "Specify your shop type and apply to upgrade your standard account to a merchant account.",
    },
    {
      id: 6,
      icon: <Briefcase size={28} />,
      title: "Legal Company",
      description:
        "Specify your shop type and apply to upgrade your standard account to a merchant account.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Gediminas Griska",
      role: "Head of Payments",
      company: "Hostinger",
      avatar: Testimonial1,
      testimonial:
        "Since we introduced cryptocurrency payments with CoinGate, we were able to reach new clients around the world with limited or no access to credit cards and banking.*attracted more customers who value privacy and prefer crypto payments.",
    },
    {
      id: 2,
      name: "Vaidas Rutkauskas",
      role: "CEO",
      company: "Cherry Servers",
      avatar: Testimonial2,
      testimonial:
        "Since we introduced cryptocurrency payments with CoinGate, we were able to reach new clients around the world with limited or no access to credit cards and banking.*attracted more customers who value privacy and prefer crypto payments.",
    },
    {
      id: 3,
      name: "Andriy Naumov",
      role: "CTO",
      company: "FoodPanda",
      avatar: Testimonial3,
      testimonial:
        "Since we introduced cryptocurrency payments with CoinGate, we were able to reach new clients around the world with limited or no access to credit cards and banking.*attracted more customers who value privacy and prefer crypto payments. 26",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "When can I deposit/withdraw from my Investment account?",
      answer:
        "You can deposit or withdraw funds from your investment account during regular market hours. The process typically takes 1-2 business days to complete. Please note that certain conditions may apply.",
    },
    {
      id: 2,
      question: "When can I deposit/withdraw from my Investment account?",
      answer:
        "Deposits and withdrawals can be made 24/7 through our online platform. However, processing times may vary depending on your bank and the time of request.",
    },
    {
      id: 3,
      question: "When can I deposit/withdraw from my Investment account?",
      answer:
        "Our platform supports instant deposits during business hours. Withdrawals are processed within 24 hours of request, subject to account verification and available funds.",
    },
    {
      id: 4,
      question: "When can I deposit/withdraw from my Investment account?",
      answer:
        "You have full control over your deposits and withdrawals. The timing depends on your account type and verification status. Contact support for specific details.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const investors = [
    {
      id: "01",
      name: "Demo15 demo15",
      username: "demo15",
      investment: 9200,
      avatarColor: "#B8A5FF",
    },
    {
      id: "02",
      name: "Demo11 demo11",
      username: "demo11",
      investment: 5700,
      avatarColor: "#FFE15A",
    },
    {
      id: "03",
      name: "Demo16 demo16",
      username: "demo16",
      investment: 3500,
      avatarColor: "#B8A5FF",
    },
    {
      id: "04",
      name: "bdtask user",
      username: "user",
      investment: 2000,
      avatarColor: "#FFE15A",
    },
    {
      id: "05",
      name: "Demo12 demo12",
      username: "demo12",
      investment: 1200,
      avatarColor: "#FF5A98",
    },
  ];

  return (
    <>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-background ${
              currentSlide === index ? "active" : ""
            }`}
            style={{
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={slide.mobileBackgroundImage}
              />
              <img
                src={slide.backgroundImage}
                alt="slider background"
                className="slider-bg-image"
              />
            </picture>
            <div className="slider-overlay"></div>
          </div>
        ))}
        <div className={`slider-content ${!isAnimating ? "active" : ""}`}>
          <div className="welcome-badge">
            {slides[currentSlide].welcomeText}
          </div>
          <h1 className="slider-title">{slides[currentSlide].title}</h1>
          <p className="slider-description">
            {slides[currentSlide].description}
          </p>
          <button className="get-started-btn">
            Get Started
            <span>→</span>
          </button>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="financial-container">
        <div className="crypto-container">
          {/* Bitcoin Orbit */}
          <div className="orbit bitcoin-orbit">
            <div
              className="satellite"
              style={{
                transform: `rotate(${rotation}deg) translateX(120px) rotate(-${rotation}deg)`,
              }}
            />
            <div className="crypto-icon bitcoin">
              <img src={BtcCircle} alt="btc" />
            </div>
          </div>

          {/* Lower Cryptos */}
          <div className="lower-cryptos">
            {/* Binance Orbit */}
            <div className="orbit binance-orbit">
              <div
                className="satellite"
                style={{
                  transform: `rotate(${
                    rotation * 1.5
                  }deg) translateX(40px) rotate(-${rotation * 1.5}deg)`,
                }}
              />
              <img className="clr-btc-img" src={Btcpurple} alt="btc" />
            </div>

            {/* Tron Orbit */}
            <div className="orbit tron-orbit">
              <div
                className="satellite"
                style={{
                  transform: `rotate(${
                    rotation * 0.8
                  }deg) translateX(40px) rotate(-${rotation * 0.8}deg)`,
                }}
              />
              <img className="clr-btc-img" src={Btcred} alt="btc" />
            </div>

            {/* Ethereum Orbit */}
            <div className="orbit ethereum-orbit">
              <div
                className="satellite"
                style={{
                  transform: `rotate(${
                    rotation * 1.2
                  }deg) translateX(40px) rotate(-${rotation * 1.2}deg)`,
                }}
              />
              <img className="clr-btc-img" src={Btccyan} alt="btc" />
            </div>
          </div>
        </div>
        <div className="financial-content">
          <p className="financial-subtitle">About Our Company</p>
          <h1 className="financial-title">
            Innovative Business Solutions for Financial Company
          </h1>
          <p className="financial-description">
            This method is suitable for paying for goods or services. You can
            set the price in a flat currency so the payer chooses a
            cryptocurrency and pays a corresponding amount, or specify the
            preferable cryptocurrency right away, and the cryptocurrency address
            will be generated after choosing a network.
          </p>
          <button className="financial-cta-button">Get Started Now</button>
        </div>
      </div>
      <div className="mystat-component">
        <MyStats />
      </div>
      <div className="myrankreward-component">
        <RankReward />
      </div>
      <div className="mypackages-component">
        <Packages />
      </div>

      <div className="wcn-container">
        <div className="wcn-header">
          <h1 className="wcn-title">Why Choose Us</h1>
          <p className="wcn-subtitle">
            To make a solid investment, you have to know where you are
            investing. Find a plan which is best for you.
          </p>
        </div>

        <div className="wcn-grid">
          {features.map((feature) => (
            <div key={feature.id} className="wcn-card">
              <div className="wcn-icon-wrapper">{feature.icon}</div>
              <h3 className="wcn-card-title">{feature.title}</h3>
              <p className="wcn-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="ct-container">
        <div className="ct-header">
          <h1 className="ct-title">
            Our Priority - Satisfied Customers,
            <br />
            But Don't Take Our Word For It
          </h1>
          <p className="ct-subtitle">
            To make a solid investment, you have to know where you are
            investing. Find a plan which is best for you
          </p>
        </div>

        <div className="ct-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="ct-card">
              <p className="ct-testimonial">{testimonial.testimonial}</p>

              <div className="ct-profile">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="ct-avatar"
                />
                <div className="ct-info">
                  <h3 className="ct-name">{testimonial.name}</h3>
                  <p className="ct-role">{testimonial.role}</p>
                </div>
              </div>

              <div className="ct-company">
                <span className="ct-company-name">{testimonial.company}</span>
                <span className="ct-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pwa-container">
        <div className="pwa-header">
          <h1 className="pwa-title">Payment We Accept</h1>
          <p className="pwa-subtitle">
            To make a solid investment, you have to know where you are
            investing. Find a plan which is best for you.
          </p>
        </div>

        <div className="pwa-slider-wrapper">
          <div className="pwa-slider">
            {paymentMethods.map((method) => (
              <div key={method.id} className="pwa-slide">
                <div className="pwa-payment-card">
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="pwa-payment-logo"
                  />
                </div>
              </div>
            ))}
            {paymentMethods.map((method) => (
              <div key={`duplicate-${method.id}`} className="pwa-slide">
                <div className="pwa-payment-card">
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="pwa-payment-logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-content">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            We answer some of your Frequently Asked Questions regarding our
            platform.
            <br />
            If you have a query that is not answered here, Please contact us.
          </p>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={faq.id} className="faq-item">
                <div className="faq-item-left-border"></div>
                <div className="faq-item-content">
                  <button
                    className="faq-question-button"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="faq-question-content">
                      <span className="faq-number">{faq.id}</span>
                      <span className="faq-question-text">{faq.question}</span>
                    </div>
                    <span
                      className={`faq-arrow ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      ▲
                    </span>
                  </button>
                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="investors-container">
        <div className="investors-content">
          <h1 className="investors-title">Our Top Investors</h1>
          <p className="investors-subtitle">
            To make a solid investment, you have to know where you are
            <br />
            investing. Find a plan which is best for you.
          </p>

          <div className="investors-grid">
            {investors.map((investor) => (
              <div key={investor.id} className="investor-card">
                <div className="investor-rank">{investor.id}</div>
                <div className="investor-profile">
                  <div
                    className="investor-avatar"
                    style={{ backgroundColor: investor.avatarColor }}
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${investor.username}`}
                      alt={investor.name}
                      className="avatar-image"
                    />
                    <div className="badge-icon">★</div>
                  </div>
                  <h3 className="investor-name">{investor.name}</h3>
                  <p className="investor-username">{investor.username}</p>
                  <div className="investment-amount">
                    Investment - $ {investor.investment}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="load-more-btn">Load More →</button>
        </div>
      </div>
    </>
  );
};

export default Home;
