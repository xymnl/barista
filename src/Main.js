import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ContactDetail from "./pages/ContactDetail";
import Introduce from "./pages/Introduce";
import Login from "./pages/Login";
import Join from "./pages/Join";

export default function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:courseSlug" element={<ContactDetail />} />
          {/* <Route path="wishlist" element={<WishList />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

// http://khdi.co.kr/SUB/?ctId=133
// https://www.starbucksathome.com/kr/story
