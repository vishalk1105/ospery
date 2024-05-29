import NavBar from "../components/NavBar";

function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
