// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { ObjectLoader, Scene } from "three";
// import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Container } from "react-bootstrap";
// import { Carousel, Row, Col, Image } from "react-bootstrap";
// import printerImage from "../assets/img/part/printer.png";

// export default function BackToBasic() {
//   const list3D = [
//     {
//       source: "/scene/processor.json",
//       position: [0, 3.4, 20],
//       rotation: [-5, 0, 0],
//     },
//     {
//       source: "/scene/monitor.json",
//       position: [0, 5, -20],
//       rotation: [0, -180, 0],
//     },
//   ];
//   const [scene, setScene] = useState(null);
//   const [index, setIndex] = useState(0);
//   const loadScene = (source) => {
//     const loader = new ObjectLoader();
//     const scene = new Scene();
//     loader.load(source, (obj) => {
//       scene.add(obj);
//     });
//     return scene;
//   };
//   // const loadScene = (source) => {
//   //   const loader = new OBJLoader();
//   //   const scene = new Scene();
//   //   loader.load(source, (obj) => {
//   //     scene.add(obj);
//   //   });
//   //   return scene;
//   // };
//   useEffect(() => {
//     setScene(loadScene(list3D[0].source));
//   }, []);
//   const indexChange = (index) => {
//     setScene(loadScene(list3D[index].source));
//   };
//   const onNextClick = () => {
//     if (index < list3D.length - 1) {
//       indexChange(index + 1);
//       setIndex(index + 1);
//     }
//   };

//   const onPrevClick = () => {
//     if (index > 0) {
//       indexChange(index - 1);
//       setIndex(index - 1);
//     }
//   };
//   return (
//     <section
//       //style={{ height: `50rem` }}
//       className="portfolio py-2 faq"
//       id="portfolio"
//     >
//       <h1 className="text-center text-light pt-3">BAGIAN - BAGIAN ENDOSKOP</h1>
//       <style>
//         {`
//         .carousel-inner {
//           height:100%
//         }
//         `}
//       </style>
//       <Container className="p-5 pt-0">
//         <Row style={{ height: `40rem` }}>
//           <h5>Index {index}</h5>
//           <Col className="mh-100">
//             <Canvas
//               camera={{
//                 position: [0, 5, -20],
//                 rotation: [-5, -180, 0],
//               }}
//               shadows
//             >
//               <primitive
//                 object={scene}
//                 // position={[0, 1, 0]}
//                 // scale={[1, 1, 1]}
//                 // rotation={[90, -180, 0]}
//               />
//               <OrbitControls target={[0, 1, 0]} />
//             </Canvas>
//             <button className="btn btn-primary" onClick={onPrevClick}>
//               &lt;
//             </button>
//             <button className="btn btn-primary" onClick={onNextClick}>
//               &gt;
//             </button>

//             {/* <Carousel
//               activeIndex={null}
//               onSelect={null}
//               interval={null}
//               className=" w-full pb-5 h-100 mh-100"
//               data-aos="fade-in"
//               data-aos-delay="100"
//             >
//               <Carousel.Item
//                 className="text-center h-100"
//                 style={{ paddingBottom: "8rem" }}
//               >
//                 <Image fluid className="img-fluid mh-100" src={printerImage} />
//                 {/* <Carousel.Caption className="text-start">
//                   <h3>{bagian.name}</h3>
//                   <p>{bagian.description}</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel> */}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }
