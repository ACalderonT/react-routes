import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";

import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
