import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Setting from "./pages/Setting";
import Alerts from "./pages/Alerts";
import Documentation from "./pages/Documentation";
import Createreports from "./pages/Createreports";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/" element={<Users/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/createreports" element={<Createreports/>} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/alerts" element={<Alerts/>} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
