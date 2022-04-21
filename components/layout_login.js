import Navbar from "./Navbar";

const LayoutHome = ({ children }) => {
  return (
    <div className="logindiv">
      <div style={{ backgroundColor: "#16151A" }}>
        <Navbar />
      </div>
      <main style={{paddingTop: "4%"}}>{children}</main>
    </div>
  );
};

export default LayoutHome;
