import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "./Carousel";
import UIcon from "../assets/icons/ui-ux.png";
import Branding from "../assets/icons/branding.png";
import Copyright from "../assets/icons/copyright.png";
import Web from "../assets/icons/web.png";
import SEO from "../assets/icons/seo.png";
import QA from "../assets/icons/search.png";
const Body = () => {
  const items = ["founders", "businesses", "brands"];
  const [currentItem, setCurrentItem] = useState("founders");
  useEffect(() => {
    let i = 0;
    let n = items.length;
    const fun = setInterval(() => {
      i = (i + 1) % n;
      setCurrentItem(items[i]);
    }, 1000);

    return () => {
      clearInterval(fun);
    };
  }, []);
  return (
    <>
      <section className="body-comp">
        <div className="container">
          <div className="row second-row">
            <div className="col-lg-6 body-first">
              <h1 style={{ color: "white", fontSize: "55px" }}>
                Helping <span>{currentItem}</span>
                <br />
                <span className="color-text">drive growth</span> today
              </h1>
              <p style={{ color: "#9c9baa" }}>
                Top-tier services tailored to your needs. Boost
                <br /> your projects with professional expertise.
              </p>
              <Button className="btn-color btn-lg ready" variant="primary">
                Request a Project
              </Button>
            </div>
            <div className="col-lg-6 body-second">
              <div className="carousel-container">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="services service-col">
                {/* pill area */}
                <h6 className="badge-pill">I can help you with</h6>
                <h1>
                  <span className="color-text">Services</span> specifically
                  <br /> designed to meet
                  <br /> your business needs
                </h1>
                <p className="service-para">
                  Take your online presence to the next level with my expert web
                  design and content creation services.
                </p>
              </div>
            </div>
            <div className="col-lg-7 service-right">
              <div className="row icon-row">
                <div className="col-12 col-md-6 scomp">
                  <img
                    className="icon"
                    src={UIcon}
                    alt="UX & Product Design Icon"
                  />
                  <h4>UX & Product Design</h4>
                  <p className="service-para ">
                    Crafting intuitive digital experiences that enhance user
                    satisfaction and engagement.
                  </p>
                </div>
                <div className="col-12 col-md-6 scomp">
                  <img className="icon" src={Web} alt="Web Development Icon" />
                  <h4>Web Development</h4>
                  <p className="service-para">
                    Building dynamic and responsive websites tailored to your
                    unique business requirements and goals.
                  </p>
                </div>
                <div className="col-12 col-md-6 scomp">
                  <img
                    className="icon"
                    src={Branding}
                    alt="Identity & Branding Icon"
                  />
                  <h4>Identity & Branding</h4>
                  <p className="service-para">
                    Creating distinctive brand identities that resonate with
                    your audience and leave a lasting impression.
                  </p>
                </div>
                <div className="col-12 col-md-6 scomp">
                  <img
                    className="icon"
                    src={Copyright}
                    alt="Copyrighting Icon"
                  />
                  <h4>Copyrighting</h4>
                  <p className="service-para">
                    Compelling content creation that effectively communicates
                    your message and engages.
                  </p>
                </div>
                <div className="col-12 col-md-6 scomp">
                  <img className="icon" src={SEO} alt="SEO & Marketing Icon" />
                  <h4>SEO & Marketing</h4>
                  <p className="service-para">
                    Driving targeted traffic to your website through strategic
                    SEO and marketing tactics.
                  </p>
                </div>
                <div className="col-12 col-md-6 scomp">
                  <img className="icon" src={QA} alt="QA Testing Icon" />
                  <h4>QA Testing</h4>
                  <p className="service-para">
                    Ensuring the functionality, and performance of your digital
                    products through quality assurance testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <div className="text-md-center explore-head">
          <h1 style={{ color: "white" }} className="heading">
            Explore <span className="color-text">my portfolio</span> showcase
          </h1>
          <p className="explore-para">
            Dive into a curated collection of my finest work, showcasing{" "}
            <br></br>
            expertise across various industries.
          </p>
          </div>
          <div className="list-container">
            <ul className="list">
              <li>All</li>
              <li>Business</li>
              <li>Corporate</li>
              <li>Creative</li>
            </ul>
          
        </div>
      </section>
    </>
  );
};

export default Body;
