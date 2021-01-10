import React, { Component } from "react";
import DatePicker from "react-date-picker";
import "./login.css";
import dataLayer from "../../../data-laye";
import { connect } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as loginActions from "../../../redux/actions/login.actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthonticate: false,
      userName: "",
      password: "",
    };
    this.dataLayer = dataLayer;
  }

  setPassword = async (event) => {
    event.persist();
    const value = event.target.value;
    if (event) {
      this.setState(() => {
        return {
          password: value,
        };
      });
    }
  };

  setEmail = async (event) => {
    event.persist();
    const value = event.target.value;
    if (event) {
      this.setState(() => {
        return {
          userName: value,
        };
      });
    }
  };

  logIn = async (event) => {
    event.preventDefault();
    const userName = this.state.userName;
    const password = this.state.password;

    toast.success("Logging you in a second please wait...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    try {
      const data = await this.dataLayer.login({ email: userName, password });
      console.log("tokens are", data);
      window.localStorage.setItem("AccessToken", data.tokens[0]);
      window.localStorage.setItem("ReffreshToken", data.tokens[1]);
      this.props.isAuthonticated(true);
      this.props.history.push("/dashboard");
    } catch (err) {
      console.log("here in error...........");
      console.log(err);
      if (err == 503) {
        toast.error("Invelid Credantials...", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (err == 422) {
        toast.error(
          "Please enter your email and password they can't be empty...",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
  };

  render() {
    // return (
    //   <>
    //     <section className="header-wrap">
    //       <div className="container-fluid">
    //         <div className="row">
    //           <div className="col-md-6 col-xs-12 logo-wrap">
    //             <img src="img/logo.png" alt="" className="img-fluid" />
    //           </div>
    //           <div className="col-md-6 col-xs-12 header-form">
    //             <form className="header-form">
    //               <div className="form-group">
    //                 <input
    //                   type="email"
    //                   className="form-control form-control-user"
    //                   id="exampleInputEmail"
    //                   placeholder="Email"
    //                 />
    //               </div>
    //               <div className="form-group">
    //                 <input
    //                   type="password"
    //                   className="form-control form-control-user"
    //                   id="exampleInputPassword"
    //                   placeholder="Create Password"
    //                 />
    //                 <p>Forgot your Password?</p>
    //               </div>
    //               <div className="form-group">
    //                 <a href="#" className="btn btn-primary btn-user btn-block">
    //                   {" "}
    //                   Log in
    //                 </a>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="login-form">
    //       <div className="container"></div>
    //       <div className="row justify-content-center">
    //         <div className="card o-hidden border-0 shadow-lg my-5">
    //           <div className="card-body p-0">
    //             <div className="row">
    //               <div className="col-lg-12">
    //                 <div className=" login-cent">
    //                   <div className="text-center">
    //                     <h1 className="h4 text-gray-900 mb-5">
    //                       Follow your favorite blogs and discover new ones.
    //                     </h1>
    //                   </div>
    //                   <form className="user">
    //                     <a
    //                       href="#"
    //                       className="btn btn-primary facebook-btn btn-user btn-block"
    //                     >
    //                       <i className="fab fa-facebook-square"></i> Continue with
    //                       Facebook
    //                     </a>
    //                     <p className="or-wrap">or</p>
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control form-control-user"
    //                         id="exampleInputName"
    //                         aria-describedby="emailHelp"
    //                         placeholder="Full Name"
    //                       />
    //                     </div>
    //                     <div className="form-group">
    //                       <input
    //                         type="email"
    //                         className="form-control form-control-user"
    //                         id="exampleInputEmail"
    //                         placeholder="Email"
    //                       />
    //                     </div>
    //                     <div className="form-group">
    //                       <input
    //                         type="password"
    //                         className="form-control form-control-user"
    //                         id="exampleInputPassword"
    //                         placeholder="Create Password"
    //                       />
    //                     </div>
    //                     <a href="#" className="btn btn-primary btn-user btn-block">
    //                       {" "}
    //                       Sign up
    //                     </a>
    //                   </form>
    //                   <div className="text-center forgot-wrap">
    //                     <a className="small" href="forgot-password.html">
    //                       Forgot Password?
    //                     </a>
    //                   </div>
    //                   <div className="text-center ">
    //                     <a className="small" href="forgot-password.html">
    //                       By Creating an account, | accept Bloglovin's Terms of
    //                       Service. Questions? Contact us{" "}
    //                     </a>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row download-wrap">
    //         <ul>
    //           <li>
    //             <a href="">
    //               <img src="img/app-store.png" alt="" className="img-fluid" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href="">
    //               <img src="img/google-play .png" alt="" className="img-fluid" />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </section>
    //   </>
    // );

    return (
      <section className="login-user">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 user-info-bg">
              <div className="login-logo">
                <img src="../../../images/logo.png" />
              </div>
            </div>
            <div className="col-md-6 user-info-details">
              <div className="signup-wrap">
                <span className="signup-text">
                  <span>Need an Account? </span>
                  <a href="/signup">Sign Up</a>
                </span>
              </div>
              <div className="user-info-details-login">
                <div className="language-selector">
                  <h3>Login</h3>
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                      <a className="dropdown-item" href="#">
                        Portugues
                      </a>
                      <a className="dropdown-item" href="#">
                        Deutsch
                      </a>
                      <a className="dropdown-item" href="#">
                        FRANÇAIS
                      </a>
                      <a className="dropdown-item" href="#">
                        日本語
                      </a>
                      <a className="dropdown-item" href="#">
                        عربى
                      </a>
                      <a className="dropdown-item" href="#">
                        ITALIANO
                      </a>
                    </div>
                  </div>
                </div>
                <form className="user-login-form mt-5" onSubmit={this.logIn}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control effects"
                      id="formGroupExampleInput"
                      value={this.state.userName}
                      onChange={this.setEmail}
                      placeholder="Email"
                    />
                    <div className="line"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control effects"
                      id="formGroupExampleInput2"
                      value={this.state.password}
                      onChange={this.setPassword}
                      placeholder="Password"
                    />
                    <div className="line"></div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary mt-5"
                    value="Login"
                  />
                  <span className="signup-text mt-3">
                    <a href="/forgotPassword">Forgot Password?</a>
                  </span>
                  <div className="login-with mt-3">Or</div>
                  <div className="login-social mt-5">
                    <div className="google-btn mb-3">
                      <button
                        type="button"
                        onClick={this.logIn}
                        className="btn btn-primary"
                      >
                        Google
                      </button>
                    </div>
                    <div className="micro-soft-btn mb-3">
                      <button type="button" className="btn btn-primary">
                        Microsoft
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ isAuthonticate }) {
  return { isAuthonticate };
}

const mapDispatchToProps = {
  isAuthonticated: loginActions.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
