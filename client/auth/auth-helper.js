import { signout } from "./api-auth.js";

const auth = {
  //save Credentials on Sucessfull sign in
  authenticate(jwt, cb) {
    if (typeof window === "undefined") {
      sessionStorage.setItem("jwt", JSON.stringify(jwt));
    }
    cb();
  },

  //retreive Credentials if signed in

  isAuthenticated() {
    if (typeof window === "undefined") {
      return false;
    }
    if (sessionStorage.getItem("jwt")) {
      return JSON.parse(sessionStorage.getItem("jwt"));
    } else {
      return false;
    }
  },

  //delete Credentials when user signed Out

  signout(cb) {
    if (typeof window === "undefined") {
      sessionStorage.removeItem("jwt");
      cb();
      signout().then(data => {
        document.cookie =
          "t=; expires=Thu, 01 Dec 2018 00:00:00 UTC; path='/';";
      });
    }
  }
};

export default auth;
