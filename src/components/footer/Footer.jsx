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
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import "../footer/footer.css";

const Footer = () => {
  return (
    <div className="footerContainer p-5 lg:p-10">
      <div className="w-full  grid grid-cols-2  gap-10 lg:grid-cols-4 lg:gap-0 lg:container border-b-2 border-gray-700 pb-5">
        <div className="">
          <div className="footer_logo flex  gap-3 items-center ">
            <div className=" w-2/6 md:w-1/2 ">
              <img src={logo} className="w-full " alt="" />
            </div>
            <div className=" w-1/2  ">
              <p className=" text-capitalize font-semibold text-xl">
                Himalaya fair reisen Pvt.ltd
              </p>
            </div>
          </div>

          <div className="para">
            <p className="text-justify text-xl font-normal ">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ad cumque modi cupiditate dolorem recusandae
              aliquam praesentium quia nostrum tenetur. Mollitia
            </p>

            <p className="text-right">
              <a href="#" className="text-blue-800 text-xl ">
                {" "}
                Read More{" "}
              </a>
            </p>
          </div>

          <div className="associate mt-6 ">
            <h5 className="mb-4 text-left">Associated with</h5>
            <div className=" flex gap-4">
              <img src={asc1} alt="" width="100px" />
              <img src={asc2} alt="" width="100px" />
              <img src={asc3} alt="" width="100px" />
            </div>
          </div>
        </div>
        <div>
          <div className="quick">
            <h5 className="text-xl font-bold mb-3 font-serif">Quicks Links</h5>

            <ul className="text-justify m-auto w-6/12 text-xl font-thin text-gray-800">
              <li className=" cursor-pointer">about us</li>
              <li className=" cursor-pointer">Our team</li>
              <li className=" cursor-pointer">Contact us</li>
              <li className=" cursor-pointer">gallery</li>
              <li className=" cursor-pointer">Blogs</li>
              <li className=" cursor-pointer">Holiday types</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="destination">
            <h5 className="text-xl font-bold mb-3 font-serif">Destinations</h5>

            <ul className="text-justify m-auto w-6/12 text-xl font-thin text-gray-800">
              <li className=" cursor-pointer">mt.everest</li>
              <li className=" cursor-pointer">lhotse</li>
              <li className=" cursor-pointer">makalu</li>
              <li className=" cursor-pointer">dorje lhakpa</li>
              <li className=" cursor-pointer">mera peak</li>
              <li className=" cursor-pointer">ama dublam</li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <h5 className="text-xl font-bold mb-3 font-serif ">Contact Us</h5>
          <ul className="text-justify m-auto w-6/12 text-xl font-thin text-gray-800">
            <li className="flex gap-3 items-baseline">
              <div
                className="  rounded-full p-2  text-white "
                style={{ backgroundColor: "#c2292e" }}
              >
                <LocationOnIcon />
              </div>
              <p>Maitedevi, kathmandu nepal</p>
            </li>

            <li className="flex gap-3 items-baseline">
              <div
                className="  rounded-full p-2  text-white "
                style={{ backgroundColor: "#c2292e" }}
              >
                <EmailIcon />
              </div>
              <p className="">himalayanfair@example.com</p>
            </li>

            <li className="flex gap-3 items-baseline">
              <div
                style={{
                  backgroundColor: "#c2292e",
                  color:'aliceblue',
                  borderRadius: "50%",
                  padding: "8px 9px",
                }}
              >
                <LocalPhoneIcon style={{ fontSize: "1.8rem" }} />
              </div>
              <p>Maitedevi, kathmandu nepal</p>
            </li>
          </ul>

          <div className="recomend">
            <h5 className="text-xl font-bold mb-3 font-serif mt-3">
              Recommended on
            </h5>

            {/* <img src="" alt="" /> */}
            <div className="recomemnde_img">
              <img src={recomended_img} alt="" style={{ width: "250px" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-3"
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
