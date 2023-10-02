import Test from "./test";
import { useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Test />;
}

export default App;
