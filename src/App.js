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
      <Parallax bgImage="/back2.jpg" strength={300}>
        <div style={{ height: "700px" }}>
          <div style={inlineStyle}>HTML inside the parallax</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
