import React from "react";
import "../About/About.css";
import img from "../../../public/detail.jpeg";
import Footer from "../../components/footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HikingIcon from "@mui/icons-material/Hiking";
import PublicIcon from "@mui/icons-material/Public";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const About = () => {
  return (
    <div>
      <div className="about_header">
        <h5 className="text-3xl text-red-50">About us</h5>
      </div>
      <div
        className="about_container p-10 md:flex md:gap-7"
        style={{ marginTop: "2rem" }}
      >
        <div className="title md:w-2/4">
          <div className="text_title">
            <div className="line"></div>
            <h5 className=" text-xl " style={{ color: " #C2292E" }}>
              About Himalayan fair reisen
            </h5>
          </div>

          <h2 style={{ textAlign: "left" }}>
            Best Trekking Partner For your holidays
          </h2>
          <p style={{ textAlign: "justify" }}>
            At Himalayan Fair Reisen, safety is paramount. Our guides are
            trained in wilderness first aid and possess the expertise to
            navigate the rugged Himalayan terrain safely. Moreover, we
            prioritize responsible tourism, . Whether you dream of standing atop
            the world's highest peaks, immersing yourself in the vibrant
            cultures of Himalayan villages, or simply escaping the hustle and
            bustle of daily life, Himalayan Fair Reisen is here to transform
            your dreams into reality. Join us on an unforgettable adventure and
            discover the enchanting beauty of the Himalayas with Himalayan Fair
            Reisen. With our dedicated team of experienced guides and a passion
            for exploration, we're committed to providing personalized and
            immersive adventures that cater to all levels of trekkers.
          </p>
        </div>

        <div className="img md:w-2/4">
          <img src={img} alt="" width="100%" />
        </div>
      </div>

      <div className="p-10 flex flex-col-reverse md:flex md:gap-7 md:flex-row">
        <div className="img md:w-2/4">
          <img src={img} alt="" width="100%" style={{ height: "500px" }} />
          <div className="img_banner">
            <ul>
              <li>
                <div className="">
                  {" "}
                  <div className="logo">
                    {/* <img src="" alt="" /> */}
                    <div
                      className=""
                      style={{
                        border: "1px solid aliceblue",
                        padding: "10px",
                        borderRadius: "50%",
                      }}
                    >
                      <DirectionsWalkIcon
                        style={{ fontSize: "2.2rem", color: "aliceblue" }}
                      />{" "}
                    </div>
                  </div>
                  <h5>2560</h5>
                  <p>satisfied client</p>
                </div>
              </li>
              <li>
                {" "}
                <div className="">
                  {" "}
                  <div className="logo">
                    {/* <img src="" alt="" /> */}
                    <div
                      className=""
                      style={{
                        border: "1px solid aliceblue",
                        padding: "10px",
                        borderRadius: "50%",
                      }}
                    >
                      <PublicIcon
                        style={{ fontSize: "2.2rem", color: "aliceblue" }}
                      />{" "}
                    </div>
                  </div>
                  <h5>25560</h5>
                  <p>Great Tours</p>
                </div>
              </li>
              <li>
                {" "}
                <div className="">
                  {" "}
                  <div className="logo">
                    {/* <img src="" alt="" /> */}
                    <div
                      className=""
                      style={{
                        border: "1px solid aliceblue",
                        padding: "10px",
                        borderRadius: "50%",
                      }}
                    >
                      <HikingIcon
                        style={{ fontSize: "2.2rem", color: "aliceblue" }}
                      />{" "}
                    </div>
                  </div>
                  <h5>84545</h5>
                  <p>Organized Trip</p>{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/4">
          <div className="text_title">
            <div className="line"></div>

            <h5
              className="text-left text-xl"
              style={{
                color: " #C2292E",
              }}
            >
              Amongst all{" "}
            </h5>
          </div>

          <h2 className="text-left">Why choose us? </h2>
          <p className="text-justify">
            Choose Himalayan Fair Reisen for your Himalayan adventure and embark
            on a journey of a lifetime. With our team of experienced
            professionals, personalized service, and commitment to safety and
            responsible tourism, we ensure that every aspect of your trek is
            expertly planned and executed. From customizing itineraries to
            prioritizing your safety and minimizing environmental impact, we
            strive to provide unparalleled experiences that leave you with
            cherished memories. Whether you're trekking to Everest Base Camp,
            exploring the Annapurna region, or immersing yourself in the vibrant
            culture of Nepal, Himalayan Fair Reisen promises unforgettable
            adventures that will exceed your expectations. Join us and discover
            the magic of the Himalayas with confidence and peace of mind.
          </p>

          <div className="whychoose_point">
            <ul className="text-justify grid  md:grid-cols-2 ">
              <li>beautiful places</li>
              <li>value for money</li>
              <li>safe travel</li>
              <li>Support team</li>
              <li>fast booking</li>
              <li>memorable experience</li>
              <li>Awesome guide</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <Whychoose /> */}

      <Footer />
    </div>
  );
};

export default About;
