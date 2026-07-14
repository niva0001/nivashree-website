import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Layout;