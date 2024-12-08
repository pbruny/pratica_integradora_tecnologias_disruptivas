import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Login />
    </div>
  );
}

export default App;
