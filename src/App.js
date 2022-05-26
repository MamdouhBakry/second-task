import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Entries from "./pages/Entries/Entries";
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container mt-5">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/entries/:catName" exact element={<Entries />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
