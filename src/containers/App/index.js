import AppRoutes from "../App/appRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <main className="">
      <BrowserRouter>
        <section className="content">{AppRoutes()}</section>
      </BrowserRouter>
    </main>
  );
};

export default App;
