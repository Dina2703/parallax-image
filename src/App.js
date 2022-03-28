import "./styles.css";

function App() {
  return (
    <div>
      <img src="/back.jpg" alt="background" />
      <div style={styles.orb}></div>
    </div>
  );
}

const styles = {
  orb: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "green",
  },
};

export default App;
