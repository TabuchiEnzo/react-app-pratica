import Free from "./components/freebanner/freebanner";
import Preminum from "./components/premiumbanner/premiumbanner";
import Pro from "./components/probanner/probanner";

function App() {
  return (
    <>
        <h1>PLANS+</h1>
        <div>
          <Free></Free>
          <Preminum></Preminum>
          <Pro></Pro>
        </div>
    </>
  );
}

export default App;
