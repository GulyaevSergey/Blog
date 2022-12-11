import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetail";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Create" element={<Create />} />
                        <Route path="/blogs/:id" element={<BlogDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
