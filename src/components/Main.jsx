import Hero from "./Hero";
import Procedure from "./Procedure";
import Steps from "./Steps";
import About from "./About";
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
