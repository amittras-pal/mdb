import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import RouterOutlet from "./components/Router/RouterOutlet";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <div className="row m-0 body" id="appBody">
          <div className="col-md-2 col-lg-2 px-0 sidebar-container">
            <Sidebar />
          </div>
          <div className="col-md-10 col-lg-10 router-outlet" id="content">
            <RouterOutlet />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
