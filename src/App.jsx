import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Agenda from "./pages/Agenda/Agenda";
import ListaCitas from "./pages/ListaCitas/ListaCitas";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <PrivateRoute path="/agenda" element={<Agenda />} />
        <PrivateRoute path="/lista-citas" element={<ListaCitas />} />
      </Routes>
    </Router>
  );
}

export default App;
