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
      <div style={{ textAlign: "center", height: "50px" }}>|||</div>
      <Parallax bgImage="/back3.jpg" blur={{ min: -1, max: 2.5 }}>
        <div style={{ height: "700px" }}>
          <div style={inlineStyle}>Dynamic blur</div>
        </div>
      </Parallax>
      <div style={{ textAlign: "center", height: "50px" }}>|||</div>
      <Parallax bgImage="/back4.jpg" strength={-500}>
        <div style={{ height: "700px" }}>
          <div style={inlineStyle}>Reverse direction</div>
        </div>
      </Parallax>
      <div style={{ textAlign: "center", height: "50px" }}>|||</div>
      <Parallax
        bgImage="/back5.jpg"
        strength={-500}
        renderLayer={(precentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(${precentage * 3})`,
              background: `rgba(245, 40, 145, ${precentage * 0.5})`,
              borderRadius: "50%",
            }}
          >
            {console.log(precentage)}
          </div>
        )}
      >
        <div style={{ height: "700px" }}>
          <div style={inlineStyle}>Render props</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
