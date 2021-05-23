import AppRoutes from "../App/appRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../../components/layouts/Navbar';

const App = () => {
  return (
    <main className="">
      <Navbar />
      <BrowserRouter>
        <section className="content">{AppRoutes()}</section>
      </BrowserRouter>
    </main>
  );
};

export default App;
