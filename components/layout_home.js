import Footer from "./Footer";

const LayoutHome = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutHome;
