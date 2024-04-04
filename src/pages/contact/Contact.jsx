import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import CallIcon from "@mui/icons-material/Call";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  return (
    <div>
      <div className="about_header">
        <h5 className="text-3xl text-red-50">Contact us</h5>
      </div>

      <div className="contact_form p-5 md:p-10">
        <div className="conatct_title text-left">
          <p className="mb-0 text-red-500 font-bold">connect with us</p>
          <h5 className="p-0  font-semibold text-2xl md:text-3xl">
            Feel Free To Contact With Us
          </h5>
        </div>

        <div className="md:flex md:gap-4">
          <form
            action=""
            className="border bg-slate-100 md:w-3/5 md:p-10 rounded-md drop-shadow-lg "
          >
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

          <div className="question_p  md:w-4/12 mt-3 m-auto">
            <h5 className="md:text-2xl">Have Any Questions ?</h5>

            <p className="text-justify">
            Don't hesitate to contact us with any questions, concerns, or requests you may have. Our team is dedicated to providing exceptional service and support to ensure your experience with us is enjoyable. 
            </p>

            <div className="callUS flex gap-3  m-auto">
              <div className="logo border-3 border-red-600 p-2 h-fit">
                {" "}
                <CallIcon className="text-red-600" />
              </div>

              <div className="">
                <div className="title text-left">
                  {" "}
                  <span>
                    {" "}
                    <b>Call Us </b>
                  </span>{" "}
                  <p>+977 03240352543</p>
                </div>
              </div>
            </div>

            <div className="location flex gap-3 m-auto">
              <div className="logo border-3 border-red-600 p-2 h-fit">
                {" "}
                <RoomIcon className="text-red-600" />
              </div>

              <div className="">
                <div className="title text-left">
                  {" "}
                  <span >
                    {" "}
                    <b>Visit us </b>
                  </span>{" "}
                  <p>Maitedevi, Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="mail flex gap-3 m-auto">
              <div className="logo border-3 border-red-600 p-2 h-fit">
                {" "}
                <EmailIcon className="text-red-600" />
              </div>

              <div className="">
                <div className="title text-left">
                  {" "}
                  <span>
                    {" "}
                    <b>Mail Us </b>
                  </span>{" "}
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="findus">
        <h5 className="text-left px-10 text-2xl md:text-3xl mb-6">
          Find us on Google map{" "}
        </h5>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.3171361808!2d85.2849330387086!3d27.708954252213044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1712226765361!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
