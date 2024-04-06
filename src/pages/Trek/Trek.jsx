import React from "react";
import "../Trek/Trek.css";
// import ImageCraousel from "../../components/ImageCraousel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloudIcon from "@mui/icons-material/Cloud";
import TerrainIcon from "@mui/icons-material/Terrain";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HikingIcon from "@mui/icons-material/Hiking";
import HotelIcon from "@mui/icons-material/Hotel";

import TrekImg from "../../../public/Trekimg.jpeg";
import MapImg from "../../../public/map.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Accordion from "../../components/Accordion/Accordion";
import Accordionfaq from "../../components/Accordion/Accordion";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Footer from "../../components/footer/Footer";

const Trek = () => {
  return (
    <div>
      <div className="">
        <div className="about_header">
          <h5 className="text-3xl text-red-50"> Langtang Valley Trek</h5>
        </div>

        <div className="trek_container p-5 md:p-10">
          <div className="trek_title text-left">
            <div className="text_title">
              <div className="line"></div>

              <h5
                className="text-left text-xl"
                style={{
                  color: " #C2292E",
                }}
              >
                Explore The World{" "}
              </h5>
            </div>
            <h5 className="p-0  font-semibold text-2xl md:text-3xl">
              Langtang Valley Trek{" "}
            </h5>
          </div>

          {/* <ImageCraousel /> */}
          <div className="img">
            <img
              src="https://cdn.stunningnepal.com/wp-content/uploads/2019/02/Langtang-Valley-Trekking-1000x667.jpeg"
              alt=""
              width="60%"
              //   height="20px"
            />
          </div>

          <div className="details   bg-slate-100 mt-5 drop-shadow-lg">
            <div className="detail_nav relative ">
              <ul className="flex flex-col sm:flex-row">
                <li className="active">Overview</li>
                <li>Itineary</li>
                <li>Trip Info</li>
                <li>Weather</li>
                <li>Equipments</li>
                <li>Useful Info</li>
                <li>Others</li>
              </ul>
            </div>

            <div className="body p-6">
              <p className=" text-left">
                <b> The Langtang Valley Trek</b> in Nepal offers adventurers a
                unique and captivating journey through some of the country's
                most breathtaking landscapes. Situated just north of Kathmandu,
                the Langtang region is renowned for its pristine alpine scenery,
                diverse flora and fauna, and vibrant local culture. The trek
                typically begins in the bustling town of Syabrubesi,
              </p>
              <p className=" text-left ">
                where travelers set out on a picturesque trail that winds
                through lush forests, cascading waterfalls, and charming Tamang
                villages. Along the way, trekkers are treated to sweeping vistas
                of snow-capped peaks, including the towering Langtang Lirung,
                which dominates the skyline. One of the highlights of the
                Langtang Trek is the opportunity to visit the Langtang National
                Park, home to a variety of rare and endangered species,
                including the elusive red panda.
              </p>
            </div>
          </div>

          <div className="glance bg-slate-50 drop-shadow-lg mt-10 md:w-2/6">
            <div className="tag text-left p-4 bg-blue-700 w-6/12 ">
              <h5> At a Glance</h5>
            </div>

            <div className="body_contaiber mt-7">
              <ul className=" px-6">
                <li>
                  {" "}
                  <div className="flex gap-4 items-center ">
                    <AccessTimeIcon
                      className=" text-blue-700"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <div className="details">
                      <div className="title">
                        <p className="mb-0 text-2xl text-gray-500 font-light">
                          {" "}
                          Duration
                        </p>
                      </div>

                      <div className="body">
                        <p className="text-2xl text-blue-500"> 4 Hours</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 items-center ">
                    <BarChartIcon
                      className=" text-blue-700"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <div className="details">
                      <div className="title">
                        <p className="mb-0 text-2xl text-gray-500 font-light">
                          {" "}
                          Trip Grade
                        </p>
                      </div>

                      <div className="body text-left">
                        <p className="text-2xl text-blue-500"> Easy</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 items-center ">
                    <CloudIcon
                      className=" text-blue-700"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <div className="details">
                      <div className="title text-left">
                        <p className="mb-0 text-2xl text-gray-500 font-light">
                          {" "}
                          Best Seasons
                        </p>
                      </div>

                      <div className="body">
                        <p className="text-2xl text-blue-500">
                          {" "}
                          4 Mar-jul, Sep-Dec
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 items-center ">
                    <TerrainIcon
                      className=" text-blue-700"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <div className="details">
                      <div className="title text-left">
                        <p className="mb-0 text-2xl text-gray-500 font-light ">
                          {" "}
                          Max Altitude
                        </p>
                      </div>

                      <div className="body">
                        <p className="text-2xl text-blue-500">
                          {" "}
                          5460m khyangjang valley
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 items-center ">
                    <FastfoodIcon
                      className=" text-blue-700"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <div className="details text-left">
                      <div className="title">
                        <p className="mb-0 text-2xl text-gray-500 font-light">
                          {" "}
                          Meals
                        </p>
                      </div>

                      <div className="body">
                        <p className="text-2xl text-blue-500">
                          {" "}
                          B ,L ,D during Trek
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 items-center ">
                    <HikingIcon
                      className=" text-blue-700"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <div className="details">
                      <div className="title text-left">
                        <p className="mb-0 text-2xl text-gray-500 font-light">
                          {" "}
                          Nature of Trip
                        </p>
                      </div>

                      <div className="body">
                        <p className="text-2xl text-blue-500">
                          {" "}
                          Mountain Sking Tour
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 items-center ">
                    <HotelIcon
                      className=" text-blue-700"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <div className="details">
                      <div className="title">
                        <p className="mb-0 text-2xl text-gray-500 font-light">
                          {" "}
                          Accomodation
                        </p>
                      </div>

                      <div className="body">
                        <p className="text-2xl text-blue-500">
                          {" "}
                          Hotel , Resort
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex md:gap-10">
            <div className="recomended bg-slate-50 drop-shadow-lg mt-10 md:w-2/6">
              <div className="tag text-left p-4 bg-blue-700 w-9/12 ">
                <h5> Recomended Tours</h5>
              </div>

              <div className="body_contaiber mt-7">
                <ul className=" px-6">
                  <li className="mt-3 pb-4">
                    {" "}
                    <div className="flex gap-4 items-center ">
                      <div className="img w-2/4">
                        <img src={TrekImg} alt="" />
                      </div>
                      <div className="details">
                        <div className="title">
                          <p className="mb-0 text-xl text-gray-600 font-bold">
                            {" "}
                            Everest Base Camp Kala pattar / Lodge - Trek
                          </p>
                        </div>

                        <div className="body flex gap-2 text-center px-6 mt-3">
                          <div className="time border-r-2 px-3 border-gray-700">
                            <AccessTimeIcon className="text-blue-600" /> 10 days
                          </div>
                          <div className="profile flex gap-3 items-center">
                            <img src={TrekImg} alt="" width="80px" /> ty
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mt-3 pb-4">
                    {" "}
                    <div className="flex gap-4 items-center ">
                      <div className="img w-2/4">
                        <img src={TrekImg} alt="" />
                      </div>
                      <div className="details">
                        <div className="title">
                          <p className="mb-0 text-xl text-gray-600 font-bold">
                            {" "}
                            Everest Base Camp Kala pattar / Lodge - Trek
                          </p>
                        </div>

                        <div className="body flex gap-2 text-center px-6 mt-3">
                          <div className="time border-r-2 px-3 border-gray-700">
                            <AccessTimeIcon className="text-blue-600" /> 10 days
                          </div>
                          <div className="profile flex gap-3 items-center">
                            <img src={TrekImg} alt="" width="80px" /> ty
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mt-3 pb-4">
                    {" "}
                    <div className="flex gap-4 items-center ">
                      <div className="img w-2/4">
                        <img src={TrekImg} alt="" />
                      </div>
                      <div className="details">
                        <div className="title">
                          <p className="mb-0 text-xl text-gray-600 font-bold">
                            {" "}
                            Everest Base Camp Kala pattar / Lodge - Trek
                          </p>
                        </div>

                        <div className="body flex gap-2 text-center px-6 mt-3">
                          <div className="time border-r-2 px-3 border-gray-700">
                            <AccessTimeIcon className="text-blue-600" /> 10 days
                          </div>
                          <div className="profile flex gap-3 items-center">
                            <img src={TrekImg} alt="" width="80px" /> ty
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mt-3 pb-4">
                    {" "}
                    <div className="flex gap-4 items-center ">
                      <div className="img w-2/4">
                        <img src={TrekImg} alt="" />
                      </div>
                      <div className="details">
                        <div className="title">
                          <p className="mb-0 text-xl text-gray-600 font-bold">
                            {" "}
                            Everest Base Camp Kala pattar / Lodge - Trek
                          </p>
                        </div>

                        <div className="body flex gap-2 text-center px-6 mt-3">
                          <div className="time border-r-2 px-3 border-gray-700">
                            <AccessTimeIcon className="text-blue-600" /> 10 days
                          </div>
                          <div className="profile flex gap-3 items-center">
                            <img src={TrekImg} alt="" width="80px" /> ty
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="map bg-slate-50 drop-shadow-lg mt-10 md:w-4/5">
              <div className="tag text-left p-4 bg-blue-700 w-2/4 ">
                <h5> Map</h5>
              </div>
              <div className="body p-6">
                <img src={MapImg} alt="" width="600px" height="200px" />
              </div>
            </div>
          </div>
          <div className="md:flex md:gap-10 mt-4">
            <div className="recomended bg-slate-50 drop-shadow-lg mt-10 md:w-2/6">
              <div className="tag text-left p-4 bg-blue-700 w-9/12 ">
                <h5> Blogs</h5>
              </div>

              <div className="body_contaiber mt-7">
                <ul className=" px-6">
                  <li className="mt-3 pb-4">
                    {" "}
                    <div className="flex gap-4 items-center ">
                      <div className="img w-2/4">
                        <img src={TrekImg} alt="" />
                      </div>
                      <div className="details">
                        <div className="title">
                          <p className="mb-0 text-xl text-gray-600 font-bold">
                            {" "}
                            Everest Base Camp Kala pattar / Lodge - Trek
                          </p>
                        </div>

                        <div className="body flex gap-2 text-center px-6 mt-3">
                          <div className="time border-r-2 px-3 border-gray-700">
                            <AccessTimeIcon className="text-grey-600" /> 10 mins
                          </div>
                          <div className="calender flex gap-3 items-center">
                            <CalendarMonthIcon />
                            <p>12 Feb 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3 pb-4">
                    {" "}
                    <div className="flex gap-4 items-center ">
                      <div className="img w-2/4">
                        <img src={TrekImg} alt="" />
                      </div>
                      <div className="details">
                        <div className="title">
                          <p className="mb-0 text-xl text-gray-600 font-bold">
                            {" "}
                            Everest Base Camp Kala pattar / Lodge - Trek
                          </p>
                        </div>

                        <div className="body flex gap-2 text-center px-6 mt-3">
                          <div className="time border-r-2 px-3 border-gray-700">
                            <AccessTimeIcon className="text-grey-600" /> 10 mins
                          </div>
                          <div className="calender flex gap-3 items-center">
                            <CalendarMonthIcon />
                            <p>12 Feb 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3 pb-4">
                    {" "}
                    <div className="flex  gap-4 items-center ">
                      <div className="img w-2/4">
                        <img src={TrekImg} alt="" />
                      </div>
                      <div className="details">
                        <div className="title">
                          <p className="mb-0 text-xl text-gray-600 font-bold">
                            {" "}
                            Everest Base Camp Kala pattar / Lodge - Trek
                          </p>
                        </div>

                        <div className="body flex gap-2 text-center px-6 mt-3">
                          <div className="time border-r-2 px-3 border-gray-700">
                            <AccessTimeIcon className="text-grey-600" /> 10 mins
                          </div>
                          <div className="calender flex gap-3 items-center">
                            <CalendarMonthIcon />
                            <p>12 Feb 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact bg-slate-50 drop-shadow-lg mt-10 md:w-4/5">
              <div className="tag text-left p-4 bg-blue-700 w-2/4 ">
                <h5> Make An Inquiry</h5>
              </div>
              <div className="body p-6 ">
                <form action="" className="  ">
                  <div className="md:flex md:gap-3">
                    {" "}
                    <div className="firstname flex flex-col  md:w-4/5">
                      <label
                        htmlFor="firstname"
                        className="md:text-left text-gray-700 mt-3 mb-2"
                      >
                        {" "}
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        className="w-5/6 md:w-full m-auto p-2 rounded-lg border-2 border-gray-700"
                      />
                    </div>
                    <div className="lastname flex flex-col md:w-4/5">
                      <label
                        htmlFor="lastname"
                        className="md:text-left text-gray-700 mt-3 mb-2"
                      >
                        {" "}
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        className="w-5/6 md:w-full m-auto p-2 rounded-lg border-2 border-gray-700"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:gap-3">
                    {" "}
                    <div className="email flex flex-col  md:w-4/5">
                      <label
                        htmlFor="email "
                        className="md:text-left text-gray-700 mt-3  mb-2"
                      >
                        {" "}
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="w-5/6 md:w-full m-auto p-2 rounded-lg border-2 border-gray-700"
                      />
                    </div>
                    <div className="phnumber flex flex-col md:w-4/5">
                      <label
                        htmlFor="phnumber"
                        className=" md:text-left text-gray-700 mt-3 mb-2"
                      >
                        {" "}
                        Phone Number{" "}
                      </label>
                      <input
                        type="text"
                        id="phnumber"
                        className="w-5/6 md:w-full m-auto p-2 rounded-lg border-2 border-gray-700"
                      />
                    </div>
                  </div>

                  {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                  <div className="message flex flex-col p-6  md:p-0 m-auto">
                    <label
                      htmlFor="msg"
                      className=" md:text-left text-gray-700 mt-3 mb-2"
                    >
                      {" "}
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      className="p-2 rounded-lg border-2 border-gray-700"
                    ></textarea>
                  </div>

                  <div className="md:text-left  md:mt-5 mb-5">
                    <button className="bg-red-500 text-amber-50 text-xl rounded-md">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="banner">
            <div className="banner_container">
              <h5 className="text-3xl text-white">
                Unveiling the Mysteries of the Wild{" "}
              </h5>
              <button className="bg-red-500 text-white text-xl rounded-md">
                {" "}
                Book This Trip
              </button>
            </div>
          </div>

          <div className="review p-5">
            <div className="review_title text-left">
              <div className="text_title">
                <div className="line"></div>

                <h5
                  className="text-left text-xl"
                  style={{
                    color: " #C2292E",
                  }}
                >
                  Tours Reviews{" "}
                </h5>
              </div>
         
              <h5 className="p-0  font-semibold text-2xl md:text-3xl">
                What other Travellers has to says ?{" "}
              </h5>
            </div>

            <div className="button flex gap-3 float-end">
              <div className="submmit">
                <button className="bg-slate-50 border-2 border-blue-600 rounded-lg">
                  {" "}
                  Submmit
                </button>
              </div>
              <div className="reveiw">
                <button className="bg-blue-800 text-white rounded-lg">
                  {" "}
                  Write a Review
                </button>
              </div>
            </div>
            <div className="review_container p-2 mt-15 md:p-5 md:mt-5">
              <ul>
                <li className="border-2 mt-5">
                  <div className="p-5  flex flex-wrap md:flex-nowrap gap-5">
                    <div
                      className="profile"
                      style={{ borderRadius: "50%", width: "200px" }}
                    >
                      <Avatar
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.modelingportfoliosnyc.com%2Fwp-content%2Fuploads%2Fjoyce47.PNG&f=1&nofb=1&ipt=15fcbb0921a7eb5b374d5945f92dc8863410660402bfc82ae09c5ce27fc8b81a&ipo=images"
                        sx={{ width: 100, height: 100 }}
                      />
                    </div>

                    <div className="content w-2/3">
                      <div className="review_input">
                        <input
                          name=""
                          id=""
                          className="p-4 border-2 w-full"
                          placeholder="Write your valuable thoughts .."
                        ></input>
                      </div>

                      <div className="review_details flex justify-between mt-4 items-center">
                        <div className="name">
                          <h5 className="text-gray-500">Cameron Williamson</h5>
                          <div className="rating">
                            {" "}
                            <p>
                              {" "}
                              <Rating name="read-only" value={5} readOnly />
                            </p>
                          </div>
                        </div>

                        <div className="review_time">
                          <p className="text-gray-500">18 Jan , 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="border-2 mt-5">
                  <div className="p-5 flex flex-wrap md:flex-nowrap gap-5">
                    <div
                      className="profile"
                      style={{ borderRadius: "50%", width: "200px" }}
                    >
                      <Avatar
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.modelingportfoliosnyc.com%2Fwp-content%2Fuploads%2Fjoyce47.PNG&f=1&nofb=1&ipt=15fcbb0921a7eb5b374d5945f92dc8863410660402bfc82ae09c5ce27fc8b81a&ipo=images"
                        sx={{ width: 100, height: 100 }}
                      />
                    </div>

                    <div className="content w-2/3">
                      <div className="review_input">
                        <p className="text-xl text-justify">
                          "OMG! I cannot believe that I have so much fun on my
                          trip. It was super good and fantastic."{" "}
                        </p>
                      </div>

                      <div className="review_details flex justify-between mt-4 items-center">
                        <div className="name">
                          <h5 className="text-gray-500">Issac Olson</h5>
                          <div className="rating">
                            {" "}
                            <p>
                              {" "}
                              <Rating
                                name="read-only"
                                value={2}
                                readOnly
                                precision={0.5}
                              />
                            </p>
                          </div>
                        </div>

                        <div className="review_time">
                          <p className="text-gray-500">18 Jan , 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="faq mt-4 p-9 ">
            <h5 className="font-bold mb-4">FAQ'S</h5>
            <div className="">
              <Accordionfaq />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Trek;
