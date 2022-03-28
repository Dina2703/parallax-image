import "./styles.css";
import { Parallax } from "react-parallax";

const inlineStyle = {
  background: "#fff",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

function App() {
  return (
    <div>
      <Parallax bgImage="/back2.jpg" strength={200}>
        <div style={{ height: "700px" }}>
          <div style={inlineStyle}>HTML inside the parallax</div>
        </div>
      </Parallax>
      <div style={{ textAlign: "center" }}>|||</div>
      <Parallax bgImage="/back3.jpg" blur={{ min: -1, max: 2.5 }}>
        <div style={{ height: "700px" }}>
          <div style={inlineStyle}>Dynamic blur</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
