import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../../public/logo.png";
import asc1 from "../../../public/asc1.png";
import asc2 from "../../../public/asc2.png";
import asc3 from "../../../public/asc3.png";
import recomended_img from "../../../public/recomemended.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import "../footer/footer.css"

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        // marginTop: "2rem",
        padding: "35px 0px",
      }}
      className="footerContainer"
    >
      <Container>
        <Row>
          <Col>
            <div className="logo " style={{ display: "flex", gap: "5px" }}>
              <img src={logo} alt="" width="150px" height="150px" />
              <p style={{ textTransform: "capitalize" }}>
                Himalaya fair reisen Pvt.ltd
              </p>
            </div>

            <div className="para" style={{ marginTop: "3rem" }}>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ad cumque modi cupiditate dolorem
                recusandae aliquam praesentium quia nostrum tenetur. Mollitia
              </p>

              <a href="#" style={{ textAlign: "right" }}>
                {" "}
                Read More{" "}
              </a>
            </div>
          </Col>
          <Col>
            <div className="quick">
              <h5>Quicks links</h5>

              <ul>
                <li>about us</li>
                <li>Our team</li>
                <li>Contact us</li>
                <li>gallery</li>
                <li>Blogs</li>
                <li>Holiday types</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="destination">
              <h5>Destinations</h5>

              <ul>
                <li>mt.everest</li>
                <li>lhotse</li>
                <li>makalu</li>
                <li>dorje lhakpa</li>
                <li>mera peak</li>
                <li>ama dublam</li>
              </ul>
            </div>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <ul>
              <li
                style={{ display: "flex", gap: "5px", alignItems: "baseline" }}
              >
                <div
                  className="log-c"
                  style={{
                    // border: "1px solid black",
                    color: "aliceblue",
                    backgroundColor: "#C22932",
                    borderRadius: "100%",
                    padding: " 5px 5px",
                  }}
                >
                  <LocationOnIcon style={{ fontSize: "1.4rem" }} />
                </div>
                <p>Maitedevi, kathmandu nepal</p>
              </li>

              <li
                style={{ display: "flex", gap: "5px", alignItems: "baseline" }}
              >
                <div
                  className="log-c"
                  style={{
                    // border: "1px solid black",
                    color: "aliceblue",
                    backgroundColor: "#C22932",
                    borderRadius: "100%",
                    padding: "5px 5px",
                  }}
                >
                  <EmailIcon style={{ fontSize: "1.4rem" }} />
                </div>
                <p>himalayanfair@example.com</p>
              </li>

              <li
                style={{ display: "flex", gap: "5px", alignItems: "baseline" }}
              >
                <div
                  className="log-c"
                  style={{
                    // border: "1px solid black",
                    color: "aliceblue",
                    backgroundColor: "#C22932",
                    borderRadius: "100%",
                    padding: "5px 5px",
                  }}
                >
                  <LocalPhoneIcon style={{ fontSize: "1.4rem" }} />
                </div>
                <p>Maitedevi, kathmandu nepal</p>
              </li>
            </ul>

            <div className="recomend">
              <h5>Recommended on</h5>

              {/* <img src="" alt="" /> */}
              <div className="recomemnde_img">
                <img src={recomended_img} alt="" style={{ width: "250px" }} />
              </div>
            </div>
          </Col>
        </Row>
        <Col>
          <h5 style={{ textAlign: "left", marginTop: "2rem" }}>
            Associated with
          </h5>
          <div className="" style={{ display: "flex", gap: "10px" }}>
            <img src={asc1} alt="" width="100px" />
            <img src={asc2} alt="" width="100px" />
            <img src={asc3} alt="" width="100px" />
          </div>
        </Col>
      </Container>

      <hr style={{ color: "grey" }} />

      <div
        className="as"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="copyRight">
          <p>
            &copy; sherpa8k Expeditions, 2022. powered by:{" "}
            <span style={{ color: "#C22932" }}> Vrit Tech </span>
          </p>
        </div>{" "}
        <div className="socialmedia" style={{}}>
          <ul className="" style={{ display: "flex", gap: "10px" }}>
            <li
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                padding: "8px 9px",
              }}
            >
              <FacebookIcon
                style={{ fontSize: "1.8rem", color: "aliceblue" }}
              />
            </li>
            <li
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                padding: "8px 9px",
              }}
            >
              <InstagramIcon
                style={{ fontSize: "1.8rem", color: "aliceblue" }}
              />
            </li>
            <li
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                padding: "8px 9px",
              }}
            >
              <TwitterIcon style={{ fontSize: "1.8rem", color: "aliceblue" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
