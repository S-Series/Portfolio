import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <SideBar />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
