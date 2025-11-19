import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />

      <div className="layout-body">
        <SideBar />
        <main className="layout-content">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;