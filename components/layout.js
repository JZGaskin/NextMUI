import Header from "./header";
import Footer from "./footer";

const layoutStyle = {
  display: "block",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  margin: "0px auto",
  maxWidth: 960,
  padding: "0px 1.0875rem 4rem",
  paddingTop: 100
};

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
