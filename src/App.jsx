import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
      <NavBar />
      <ItemListContainer greeting={'BIENVENIDOS A LA TIENDA DE ROPA DE BEBES DE LOLA'} />
      </div>

    </>

  );
}

export default App;
