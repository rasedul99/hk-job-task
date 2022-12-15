import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SendFormData from "./components/SendFormData";

function App() {
  return (
    <div>
      <ToastContainer />
      <div className="App grid grid-cols-2">
        <SendFormData />
        <SendFormData />
      </div>
    </div>
  );
}

export default App;
