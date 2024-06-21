import Header from "./components/Header";
import CounterData from "./components/counterdata";
import Container from "./container";
import Controles from "./controles";
import "./App.css";
import { useSelector } from "react-redux";
import PrivacyContent from "./privacy-content";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="counter">
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyContent /> : <CounterData />}
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Controles />
            </div>
          </div>
        </div>
      </Container>
    </center>
  );
}

export default App;
