// import processorImage from "../assets/img/part/processor.png";
// import monitorImage from "../assets/img/part/monitor.png";
// import fluidManagementImage from "../assets/img/part/suction-pump.png";
// import selangImage from "../assets/img/part/selang-endoskop.png";
// import printerImage from "../assets/img/part/printer.png";
// import lightSourceImage from "../assets/img/part/lightsource.png";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Container, Row, Col, Nav, Image, Carousel } from "react-bootstrap";

// import { useEffect, useState } from "react";
// import { ObjectLoader, Scene } from "three";
// import ThreeDContainer from "./ThreeDContainer";
// export default function PartOf() {
//   const listBagian = [
//     {
//       name: "Processor",
//       img: processorImage,
//       threeD: "/processor.json",
//       position: [-2.734, 2.09, 13.15],
//       description:
//         "Processor adalah komponen utama dari sistem endoskopi hewan yang bertanggung jawab untuk memproses sinyal video dari endoskop. Sinyal video ini kemudian diteruskan ke monitor untuk ditampilkan. Processor juga dapat digunakan untuk menyimpan gambar atau video dari endoskopi",
//     },
//     {
//       name: "Light Source",
//       img: lightSourceImage,
//       threeD: "/processor.json",
//       position: [-2, 2.09, 13],
//       description:
//         "Light Source adalah sumber cahaya yang digunakan untuk menerangi organ dalam hewan selama endoskopi. Light Source dapat berupa sumber cahaya fiber-optic atau sumber cahaya xenon. Sumber cahaya fiber-optic lebih portabel dan hemat biaya, sedangkan sumber cahaya xenon menghasilkan cahaya yang lebih terang dan lebih stabil.",
//     },
//     {
//       name: "Monitor",
//       img: monitorImage,
//       threeD: "/processor.json",
//       position: [-2.734, 2.09, 13.15],
//       description:
//         "Monitor adalah layar yang digunakan untuk menampilkan gambar atau video dari endoskopi. Monitor harus memiliki resolusi yang tinggi untuk menampilkan detail gambar yang jelas.",
//     },
//     {
//       name: "Suction Pump",
//       img: fluidManagementImage,
//       threeD: "/processor.json",
//       position: [-2.734, 2.09, 13.15],
//       description:
//         "Suction Pump adalah alat yang digunakan untuk menyedot cairan atau jaringan dari organ dalam hewan selama endoskopi. Suction Pump dapat digunakan untuk membersihkan area yang diperiksa atau untuk mengambil sampel jaringan untuk biopsi.",
//     },
//     {
//       name: "Selang Endoskop",
//       img: selangImage,
//       threeD: "/processor.json",
//       position: [-2.734, 2.09, 13.15],
//       description:
//         "Endoskop adalah pipa tipis yang dilengkapi dengan lensa, kamera, dan sumber cahaya. Pipa ini dimasukkan ke dalam tubuh hewan melalui lubang alami atau buatan. Endoskop tersedia dalam berbagai ukuran dan bentuk, masing-masing dirancang untuk memeriksa organ atau sistem tubuh tertentu.",
//     },
//     {
//       name: "Printer",
//       img: printerImage,
//       threeD: "/processor.json",
//       position: [-2.734, 2.09, 13.15],
//       description:
//         "Printer adalah alat yang digunakan untuk mencetak gambar atau video dari endoskopi. Printer dapat digunakan untuk mendokumentasikan hasil endoskopi atau untuk mengirimkan hasil ke dokter hewan lain untuk opini kedua.",
//     },
//   ];
//   const [active, setActive] = useState(0);
//   const [index, setIndex] = useState(0);
//   const [scenes, setScenes] = useState([]);
//   // const loader = new ObjectLoader();
//   // const scene = new Scene();
//   // loader.load("/processor.json", (obj) => {
//   //   scene.add(obj);
//   // });
//   // const [showed, setShowed] = useState(listBagian[0]);
//   // const handleChoose = (index) => {
//   //   setActive(index);
//   //   handleSelect(index);
//   // };
//   const handleSelect = (index) => {
//     setIndex(index);
//     setActive(index);
//   };
//   useEffect(() => {
//     const loader = new ObjectLoader();
//     listBagian.forEach((bagian) => {
//       const scene = new Scene();
//       loader.load(bagian.threeD, (obj) => {
//         scene.add(obj);
//       });
//       setScenes([...scenes, scene]);
//     });
//     // setScene(
//     //   <Canvas
//     //     camera={{ position: listBagian[0].position }}
//     //     shadows
//     //     key={"canvas" + index}
//     //   >
//     //     <ambientLight intensity={25} />
//     //     <primitive
//     //       object={scene}
//     //       // position={[0, 1, 0]}
//     //       // scale={[1, 1, 1]}
//     //       // rotation={[90, -180, 0]}
//     //     />
//     //     <OrbitControls target={[0, 1, 0]} />
//     //   </Canvas>
//     // );
//   }, []);
//   // const gltf = useLoader(GLTFLoader, "/scene.glb");
//   return (
//     <section
//       //style={{ height: `50rem` }}
//       className="portfolio py-2 faq"
//       id="portfolio"
//     >
//       {console.log(index)}
//       <h1 className="text-center text-light pt-3">BAGIAN - BAGIAN ENDOSKOP</h1>
//       <style>
//         {`
//         .carousel-inner {
//           height:100%
//         }
//         `}
//       </style>
//       <Container className="p-5 pt-0">
//         <Row style={{ height: `45rem` }}>
//           {/* Sidebar */}
//           {/* <Col style={{ height: `50rem` }} sm={3} className=" overflow-auto">
//             <Nav className="flex-column">
//               {listBagian.map((bagian, index) => (
//                 <Nav.Link
//                   href="#"
//                   key={index}
//                   className={`border rounded my-1 ${
//                     active === index ? "border-warning" : ""
//                   }`}
//                   onClick={() => handleSelect(index)}
//                 >
//                   <Image fluid src={bagian.img} />
//                   <p className="text-center m-0  text-light">{bagian.name}</p>
//                 </Nav.Link>
//               ))}

//               Tambahkan thumbnail dan judul lainnya sesuai kebutuhan
//             </Nav>
//           </Col> */}

//           {/* Bagian Utama */}
//           <Col>
//             {/* <Row className="mb-3">
//               <Image src={showed.img} fluid />
//             </Row>
//             <Row>
//               <h1>{showed.name}</h1>
//               <p>{showed.description}</p>
//             </Row>
//             Tampilkan gambar dalam ukuran besar */}
//             {/* <Carousel
//               activeIndex={index}
//               onSelect={handleSelect}
//               interval={null}
//               className="w-full py-5 h-100 "
//               indicators={true}
//             >
//               {listBagian.map((bagian, index) => (
//                 <Carousel.Item className="text-center h-100" key={index}>
//                   <Canvas
//                     camera={{ position: [2.012, 4.075, -10.647] }}
//                     shadows
//                     key={"canvas" + index}
//                   >
//                     <ambientLight intensity={25} />
//                     <primitive
//                       object={gltf.scene}
//                       position={[0, 1, 0]}
//                       scale={[0.03, 0.03, 0.03]}
//                     />
//                     <OrbitControls target={[0, 1, 0]} />
//                   </Canvas>
//                 </Carousel.Item>
//               ))}
//             </Carousel> */}
//             <Carousel
//               activeIndex={index}
//               onSelect={handleSelect}
//               interval={null}
//               className=" w-full pb-5 h-100 "
//             >
//               {listBagian.map((bagian, index) => (
//                 <Carousel.Item className="text-center h-100" key={index}>
//                   {/* <ThreeDContainer
//                     source={bagian.threeD}
//                     position={bagian.position}
//                     scale={[0.02, 0.02, 0.02]}
//                   /> */}
//                   <Image fluid className="img-fluid mb-5" src={bagian.img} />
//                   <Carousel.Caption className="text-start">
//                     <h3>{bagian.name}</h3>
//                     <p>{bagian.description}</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               ))}
//               {/* <Canvas
//                 camera={{ position: listBagian[index].position }}
//                 shadows
//                 key={"canvas" + index}
//               >
//                 <ambientLight intensity={25} />
//                 <primitive
//                   object={scenes[index]}
//                   // position={[0, 1, 0]}
//                   // scale={[0.03, 0.03, 0.03]}
//                 />
//                 <OrbitControls target={[0, 1, 0]} />
//               </Canvas> */}
//             </Carousel>
//           </Col>
//           {/* <Row className="d-flex justify-content-end">
//             <button
//               className="btn btn-outline-light btn-lg m-3"
//               style={{ width: 18 + "rem" }}
//             >
//               LIHAT DALAM MODEL 3D
//             </button>
//           </Row> */}
//         </Row>
//       </Container>

//       {/* {listBagian.map((bagian, index) => ( */}
//       {/* <ThreeDContainer
//           key={index}
//           source={listBagian[0].threeD}
//           position={listBagian[0].position}
//           scale={[0.02, 0.02, 0.02]}
//         /> */}

//       {/* <ModalFull
//         showModal={showModal}
//         setShow={setShow}
//         link={
//           "https://sketchfab.com/models/53a7784bdab34a21bb2510b03ec6c53f/embed?autospin=1&autostart=1"
//         }
//         data={listBagian}
//         from=
//       /> */}
//     </section>
//   );
// }
