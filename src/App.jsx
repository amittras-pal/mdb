import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import RouterOutlet from "./components/Router/RouterOutlet";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <BrowserRouter>
          <div className="row m-0 body">
            <div className="col-md-2 col-lg-2 px-0 sidebar-container">
              <Sidebar />
            </div>
            <div className="col-md-10 col-lg-10 router-outlet" id="content">
              <RouterOutlet />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
