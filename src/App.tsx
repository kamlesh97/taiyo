import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserList from "./Screen/UserList";
import Adduser from "./Screen/Adduser";
import Edituser from "./Screen/Edituser";
import Countrymap from "./Screen/Countrymap";
import CovidChart from "./Screen/CovidChart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 p-4 sm:ml-64 md:pt-32 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edituser />} />
        <Route path="/country" element={<Countrymap />} />
        <Route path="/chart" element={<CovidChart />} />
      </Routes>
    </div>
  );
}

export default App;
