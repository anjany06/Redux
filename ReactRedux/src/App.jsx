import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import DisplayCounter from "./component/DisplayCounter";
import Model from "./component/Model";
import Controls from "./component/Controls";
import PrivacyMessage from "./component/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Model>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter></DisplayCounter>}
            <Controls></Controls>
          </div>
        </Model>
      </center>
    </>
  );
}

export default App;
