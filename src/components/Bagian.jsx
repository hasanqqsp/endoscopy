import processorImage from "../assets/img/part/processor.png";
import monitorImage from "../assets/img/part/monitor.png";
import fluidManagementImage from "../assets/img/part/suction-pump.png";
import selangImage from "../assets/img/part/selang-endoskop.png";
import printerImage from "../assets/img/part/printer.png";
import lightSourceImage from "../assets/img/part/lightsource.png";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import { useState } from "react";
import Iframe from "react-iframe";
export default function PartOf() {
  const listBagian = [
    {
      name: "Processor",
      img: processorImage,
      sketchfab:
        "https://sketchfab.com/models/eb590bdf85b345df80385c1e1702e2d6/embed?autostart=1",
      description:
        "Processor adalah komponen utama dari sistem endoskopi hewan yang bertanggung jawab untuk memproses sinyal video dari endoskop. Sinyal video ini kemudian diteruskan ke monitor untuk ditampilkan. Processor juga dapat digunakan untuk menyimpan gambar atau video dari endoskopi",
    },
    {
      name: "Light Source",
      img: lightSourceImage,
      sketchfab:
        "https://sketchfab.com/models/54d1d8bead0a43e7a8b0ac1f3de1d290/embed?autostart=1",
      description:
        "Light Source adalah sumber cahaya yang digunakan untuk menerangi organ dalam hewan selama endoskopi. Light Source dapat berupa sumber cahaya fiber-optic atau sumber cahaya xenon. Sumber cahaya fiber-optic lebih portabel dan hemat biaya, sedangkan sumber cahaya xenon menghasilkan cahaya yang lebih terang dan lebih stabil.",
    },
    {
      name: "Monitor",
      img: monitorImage,
      sketchfab:
        "https://sketchfab.com/models/434cda4b7e7748a3ad4bafada022db77/embed?autostart=1",
      description:
        "Monitor adalah layar yang digunakan untuk menampilkan gambar atau video dari endoskopi. Monitor harus memiliki resolusi yang tinggi untuk menampilkan detail gambar yang jelas.",
    },
    {
      name: "Suction Pump",
      img: fluidManagementImage,
      sketchfab:
        "https://sketchfab.com/models/ec81fda5d6034a868c45b95ce8242940/embed?autostart=1",
      description:
        "Suction Pump adalah alat yang digunakan untuk menyedot cairan atau jaringan dari organ dalam hewan selama endoskopi. Suction Pump dapat digunakan untuk membersihkan area yang diperiksa atau untuk mengambil sampel jaringan untuk biopsi.",
    },
    {
      name: "Selang Endoskop",
      img: selangImage,
      sketchfab:
        "https://sketchfab.com/models/611d25bde89c4836aaf341473d38c174/embed?autostart=1",
      description:
        "Endoskop adalah pipa tipis yang dilengkapi dengan lensa, kamera, dan sumber cahaya. Pipa ini dimasukkan ke dalam tubuh hewan melalui lubang alami atau buatan. Endoskop tersedia dalam berbagai ukuran dan bentuk, masing-masing dirancang untuk memeriksa organ atau sistem tubuh tertentu.",
    },
    {
      name: "Printer",
      img: printerImage,
      sketchfab:
        "https://sketchfab.com/models/8199801415f24ea4814586fd448e1fea/embed?autostart=1",
      description:
        "Printer adalah alat yang digunakan untuk mencetak gambar atau video dari endoskopi. Printer dapat digunakan untuk mendokumentasikan hasil endoskopi atau untuk mengirimkan hasil ke dokter hewan lain untuk opini kedua.",
    },
  ];
  const [index, setIndex] = useState(0);

  const handleSelect = (index) => {
    setIndex(index);
  };
  return (
    <section className="portfolio py-2 faq" id="portfolio">
      {console.log(index)}
      <h1 className="text-center text-light pt-3 mb-3">
        BAGIAN - BAGIAN ENDOSKOP
      </h1>
      <style>
        {`
        .carousel-inner {
          height:100%;
          flex: 0 0 auto;
          width: 83.33333333%;
          margin: 0 auto;
        }
        `}
      </style>
      <Container
        fluid={"sm"}
        className="
       pt-0"
      >
        <Row style={{ minHeight: `42rem` }}>
          <Col className="mh-100">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              className="w-full pb-5 h-100 mh-100 col-10 mx-auto"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              {listBagian.map((bagian, index) => (
                <Carousel.Item
                  className="text-center  overflow-auto "
                  key={index}
                >
                  <Row
                    className="h-100 ratio ratio-16x9 w-100 mx-auto"
                    style={{ maxHeight: "32rem" }}
                  >
                    <Col>
                      <div
                        className="sketchfab-embed-wrapper ratio mx-auto"
                        style={{ maxWidth: "60rem" }}
                      >
                        <Iframe
                          title="printer"
                          frameBorder="0"
                          allowfullscreen
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                          xr-spatial-tracking
                          execution-while-out-of-viewport
                          execution-while-not-rendered
                          web-share
                          src={bagian.sketchfab}
                          className="img-fluid h-100 "
                          style={{ maxWidth: "54rem" }}
                        >
                          {" "}
                        </Iframe>
                      </div>
                    </Col>
                  </Row>
                  <Carousel.Caption className="text-start position-static container mt-2">
                    <h3>{bagian.name}</h3>
                    <p>{bagian.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
