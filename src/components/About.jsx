import { useRef } from "react";
import Iframe from "react-iframe";
export default function About() {
  const iframe = useRef();

  return (
    <section id="about" className="about">
      <div className="container" style={{ minHeight: "27rem" }}>
        <div className="row h-75">
          <div
            className="col-lg-6 order-1 order-lg-2 "
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="sketchfab-embed-wrapper h-100 mx-1" ref={iframe}>
              <link rel="preconnect" href="https://media.sketchfab.com" />
              <Iframe
                title="Endoskopi"
                frameBorder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking;"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                url="https://sketchfab.com/models/a6de3d4b2bc5450490ddd7ccdc7ef859/embed?autospin=1&autostart=1"
                className="w-100 h-100"
              />
            </div>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
            <h3>Apa itu Endoskopi</h3>
            <p className="fs-5 md-fs-6" style={{ textAlign: "justify" }}>
              Endoskopi hewan adalah prosedur medis untuk memeriksa organ-organ
              dalam tubuh hewan, seperti lambung, usus, saluran pernapasan, dan
              berbagai bagian lainnya, tanpa melakukan pembedahan yang invasif.
              Alat ini sangat penting dalam dunia kedokteran hewan karena
              memungkinkan dokter hewan untuk mendiagnosis masalah kesehatan
              pada hewan peliharaan atau hewan ternak tanpa perlu melakukan
              pembedahan besar.
            </p>
            {/* <a href="#services" className="read-more text-decoration-none">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
