import { HashRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products.jsx"
import Home from "./components/home/Home";
import SideBarMenu from "./components/sidebar/SideBarMenu.jsx";
import Complements from "./components/complements/Complements.jsx";

function App() {
    return (
        <div className="w-full h-full">
            <HashRouter>
                <SideBarMenu>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/complements" element={<Complements />} />
                    </Routes>
                </SideBarMenu>
            </HashRouter>
        </div>
    )
}
export default App