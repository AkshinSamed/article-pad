import React, { Component } from "react";
import ArticlePadService from "../services/ArticlePadService";
class LoginAndSignUpFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      falseCredentials: this.props.match.params.falseCredentials,
      articles: [],
    };
    this.aboutUsPage = this.aboutUsPage.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.login = this.login.bind(this);
    this.popUp = this.popUp.bind(this);
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  login() {
    console.log(
      `LoginAndSignUp : login -> email: + ${this.state.email} + password: ${this.state.password}`
    );
    console.log(JSON.stringify(this.state.articles));
    if(this.state.email === '' || this.state.password === ''){
      this.popUp();
      return;
    }
    ArticlePadService.getUserByEmailAndPassword(
      this.state.email,
      this.state.password
    ).then((res) => {
      console.log('Res Data: ' + res.data);
      this.setState({ articles: res.data });
    }).catch(error => {
          this.props.history.push(`/${this.state.falseCredentials}`);

    });
    console.log(JSON.stringify(this.state.articles));
    this.props.history.push(
      `/article-view/${this.state.email}/${this.state.password}`
    );
  }

  aboutUsPage() {
    console.log("inside of aboutUsPage");
    this.props.history.push('/about-us');
  }

  popUp() {
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Holy smokes!</strong>
      <span class="block sm:inline">Something seriously bad happened.</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>;
  }
  

  render() {
    return (
      <div className="container">
        {this.state.falseCredentials ? 
        (
          this.popUp()
        )
         :
        (
          <h1></h1>
        )
        }
        <div class="h-screen md:flex">
          <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
            <div>
              <h1 class="text-white font-bold text-4xl font-sans">
                ArticlePad
              </h1>
              <p class="text-white mt-1">
                The most popular Article Pad for everyone :)
              </p>
              <button
                type="submit"
                class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                onClick={this.aboutUsPage}
              >
                Read More
              </button>
            </div>
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
          <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
            <form class="bg-white">
              <h1 class="text-gray-800 font-bold text-2xl mb-1">
                Hello Again!
              </h1>
              <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  class="pl-2 outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.changeEmailHandler}
                />
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  class="pl-2 outline-none border-none"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.changePasswordHandler}
                />
              </div>
              <button
                type="submit"
                class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                onClick={this.login}
              >
                Login
              </button>
              <button
                type="submit"
                class="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                SignUp
              </button>
              <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                Forgot Password ?
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginAndSignUpFormComponent;