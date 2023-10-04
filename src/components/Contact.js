"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button } from "@mui/material";

function Contact() {
  // snackbar
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et75iw9",
        "template_ngcbjol",
        form.current,
        "FPqQ1O4OvEo37D7UC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mb-10">
      <section id="contact">
        <div className="container">
          <div
            className="row text-center mb-10
          
          group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
          "
          >
            <h1 className="display-3 fw-bold text-capitalize text-color-white">
              Get started
            </h1>
            <div className="heading-line"></div>
            <p className="lh-lg">feel free to contact.</p>
          </div>

          {/* <!-- START THE CTA CONTENT  --> */}
          <div
            className="row text-dark
            
            "
            style={{
              backgroundImage: "linear-gradient(to right, #4D57DE ,#854EEE)",
            }}
          >
            <div
              className="col-12 col-lg-6 gradient shadow p-3
            
            "
            >
              <div className="container">
                <div className="row pt-5"></div>
                <section className="newsletter_area">
                  <div className="container">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-12">
                        <div className="subscription_box text-center">
                          <h2 className="text-uppercase text-white">
                            get update from anywhere
                          </h2>
                          <p className="text-white">
                            Stay Tuned, Subscribe to our newslatter
                          </p>
                          <div className="subcribe-form" id="mc_embed_signup">
                            <form className="subscription relative">
                              <input
                                name="EMAIL"
                                placeholder="Email address"
                                onFocus="this.placeholder = ''"
                                onBlur="this.placeholder = 'Email address'"
                                required
                                type="email"
                              />

                              <button className="primary-btn hover d-inline mt-2">
                                Get Started
                              </button>
                              <div className="info"></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-12 col-lg-6 bg-white shadow p-3">
              <div className="form w-100 pb-2">
                <h4 className="fw-bolder mb-5 text-center text-primary">
                  Lets connect and discuss productive
                </h4>

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="row subscription relative"
                >
                  <div className="col-lg-6 col-md mb-3 text-center">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      id="inputFirstName"
                      className="shadow form-control form-control-lg"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md mb-3">
                    <input
                      type="text"
                      asp-for="last_name"
                      placeholder="Last Name"
                      id="inputLastName"
                      className="shadow form-control form-control-lg"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="email"
                      placeholder="email address"
                      id="inputEmail"
                      name="from_email"
                      className="shadow form-control form-control-lg"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea
                      name="message"
                      asp-for="message"
                      placeholder="message"
                      id="message"
                      rows="12"
                      className="shadow form-control form-control-lg"
                    ></textarea>
                  </div>
                  <div className="text-center d-grid mt-1">
                    <button
                      type="submit"
                      value="Send"
                      className="btn btn-primary rounded-pill pt-3 pb-3"
                      onClick={handleClick({
                        vertical: "top",
                        horizontal: "right",
                      })}
                    >
                      submit
                      <i className="fas fa-paper-plane"></i>
                    </button>

                    <Snackbar
                      open={open}
                      autoHideDuration={3000}
                      onClose={handleClose}
                      anchorOrigin={{ vertical, horizontal }}
                      key={vertical + horizontal}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        message sent!
                      </Alert>
                    </Snackbar>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
