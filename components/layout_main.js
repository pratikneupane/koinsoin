import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutMain = ({ children }) => {
  return (
    <>
      <div style={{ backgroundColor: "#16151A" }}>
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LayoutMain;