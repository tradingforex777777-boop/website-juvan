import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, Home, About, Product, Activity, Contact } from './components/MainLayout.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function sendwhatsapp(){
    var phonenumber = "+6282312451989";
          
    var nama = document.queryselector('.nama').value;
    var nomorhp = document.queryselector('.nomorhp').value;
    var email = document.queryselector('.email').value;
    var subjek = document.queryselector('.subjek').value;
    var pesan = document.queryselector('.pesan').value;
          
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*nama :* " +nama+"%0a"
    +"*nomorhp :* " +nomorhp+"%0a"
    +"*email :* " +email+"%0a"
    +"*subjek :* " +subjek+"%0a"
    +"*pesan :* " +pesan+"%0a%0a"
  
    window.open(url, '_blank').focus();      
  }

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/produk" element={<Product />} />
            <Route path="/galeri" element={<Activity />} />
            <Route path="/hubungi-kami" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
