import "./index.css"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Services from "./routes/Services"
import Clients from "./routes/Clients"
import Contact from "./routes/Contact"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/clients" element={<Clients/>} />
                <Route path="/contact" element={<Contact/>} />

            </Routes>
        </div>
    );
}
