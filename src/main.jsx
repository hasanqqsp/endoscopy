import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "aos/dist/aos.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

// Import all of Bootstrap's JS
import "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
