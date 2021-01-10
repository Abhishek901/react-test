import axios from "axios";
//axios.defaults.baseURL = 'https://api.pinchappmail.com/v1/public'

class dataLayer {
  constructor() {
    this.axiosBussiness = axios.create({
      baseURL: "http://localhost:5003",
    });
    this.axiosBussiness.defaults.headers.post["Content-Type"] =
      "application/json"; // for POST
    this.axiosBussiness.defaults.headers.patch["Content-Type"] =
      "application/json";
    this.axiosBussiness.defaults.headers.patch["Access-Control-Allow-Origin"] =
      "*";
    this.axiosBussiness.interceptors.request.use(function (config) {
      console.log("called interceptors............");
      const token = window.localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.axiosAuth = axios.create({
      baseURL: "http://localhost:5005",
    });

    this.axiosAuth.defaults.headers.post["Content-Type"] = "application/json"; // for POST
    this.axiosAuth.defaults.headers.patch["Content-Type"] = "application/json";
    this.axiosAuth.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
    this.axiosAuth.interceptors.request.use(function (config) {
      console.log("called interceptors............");
      const token = window.localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  getBussienessReviewData(bussiness) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post("/api/bussiness/zomato", bussiness)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updateBussiness(objectVal) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .patch("/api/bussiness/", objectVal)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          reject(error.response.status);
        });
    });
  }

  login(credentials) {
    console.log("here in data sections");
    console.log(credentials);
    return new Promise((resolve, reject) => {
      this.axiosAuth
        .post("/api/login", credentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (error.response) {
            //console.log(error.response.data);
            //console.log(error.response.status);
            //console.log(error.response.headers);
          }
          reject(error.response.status);
        });
    });
  }

  addBussiness(bussiness) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post("/api/bussiness/", bussiness)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            //console.log(error.response.data);
            //console.log(error.response.status);
            //console.log(error.response.headers);
          }
          reject(error.response.status);
        });
    });
  }

  getBussiness() {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .get("/api/bussiness/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  verify(credentials) {
    // console.log("here in data sections");
    // console.log(credentials);
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/verify", credentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }
}

export default new dataLayer();
