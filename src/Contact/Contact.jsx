// import libraries
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import assets
import contact from "../assets/beneficio1.png";
import quierosumarme from "../assets/quierosumarme.png";


import Pulse from "react-reveal/Pulse";
// import Slide from "react-reveal/Slide";
// import styles
import "./contact.css";

const Contact = ({ active }) => {
  const form = useRef();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const clearInputs = (e) => {
    e.preventDefault();
    // 👇️ clear input field value
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
    console.log("in");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      e.currentTarget.user_name.value === "" ||
      e.currentTarget.user_email.value === "" ||
      e.currentTarget.message.value === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "No empty entries allowed",
        timer: 1500,
      });
      return;
    }
    await emailjs
      .sendForm(
        "service_qe1it9h",
        "template_n6a2lje",
        form.current,
        "UibsY4UnD3uZLnpfw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        Swal.fire({
          icon: "success",
          title: "Your email has been sent",
          timer: 2000,
        })
      );
    clearInputs();
  };
  return (
    
      <div className="flex flex-col  md:justify-start 2xl:justify-center md:flex-row  contactoGrow">
        <div className="flex flex-col self-center  ">
        
            <img src={contact} alt="contact-logo" className="contact_logo max-w-xl" />
         
        </div>
        <div className="flex flex-col self-center w-4/5 md:w-2/5 px-4">
        <Pulse delay={200} when={active}>
            <img src={quierosumarme} alt="contact-logo" className=" sumarmeLogo max-w-sm max-h-sm" />
          </Pulse>
          <form
            id="myForm"
            className="contactme-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mt-2">
              {/* <label className="text-sm mb-2 md:text-lg text-black">Name</label> */}
              {/* <Slide top when={active}> */}
                <input
                  autofocus
                  type="text"
                  name="user_name"
                  ref={ref1}
                  className="bg-neutral-900 text-white w-full rounded-md w-full px-6 py-4 inputs"
                  placeholder="Ingresa Tu Nombre"
                />
              {/* </Slide> */}
            </div>
            <div className="mt-1">
              {/* <label className="text-sm mb-2 md:text-lg text-black">Email</label> */}
              {/* <Slide top delay={200} when={active}> */}
                <input
                  type="email"
                  name="user_email"
                  ref={ref2}
                  className="bg-neutral-900 text-white w-full rounded-md w-full px-6 py-4 inputs"
                  placeholder="www.ejemplo.com"
                />
              {/* </Slide> */}
            </div>
            <div className="mt-1">
              {/* <label className="text-sm mb-2 md:text-lg text-black">Message</label> */}
              <div className="mt-1">
                {/* <Slide top delay={400} when={active}> */}
                  <textarea
                    name="message"
                    ref={ref3}
                    rows="3"
                    className="bg-neutral-900 text-white w-full rounded-md w-full px-6 py-4 inputs"
                    placeholder="Dejanos Un Comentario"
                  ></textarea>
                {/* </Slide> */}
              </div>
            </div>

            <div className=" text-left">
              <button
                onSubmit={clearInputs}
                type="submit"
                className="bg_animate inline-flex justify-center rounded-md bg-violet-700 py-3 px-8 text-sm text-white md:text-base"
              >
                Enviar
              </button>
            </div>
          </form>
          
        </div>
      </div>
  );
};

export default Contact;
