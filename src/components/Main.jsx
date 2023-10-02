import Hero from "./Hero";
import PartOf from "./PartOf";
import Procedure from "./Procedure";
import Steps from "./Steps";
import About from "./About";
import Facility from "./Facility";
import Bagian from "./Bagian";
export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Bagian />
      <Steps />
      <Procedure />
      {/* <Facility /> */}
    </main>
  );
}
