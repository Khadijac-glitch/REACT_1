import "./App.css";
import Banner from "./Component/Banner";
import Sidebar from "./Component/Sidebar";
import ShoppingList from "./Component/ShoppingList";
import Footer from "./Component/Footer";
import Categories from "./Component/Categories";
const styles = {
  padding: 10,
  background: "white",
  border: "1px solid red",
};
const para = {
  position: "relative",
  left: 1140,
  color: "black",
};
const side = {
  border: "3px solid yellow",
  color: "white",
  background: "green",
  width: 250,
  height: 400,
  position: "relative",
  bottom: 35,
};
const after = {
  position: "relative",
  left: 15,
};
const gori = {
  display: "flex",
  justify_content: "space_around",
  position: "relative",
  bottom: 410,
  left: 580,
  border: "2px solid yellow",
  width: 300,
};
const input = {
  width: 100,
  margin: 10,
};
const footer = {
  position: "relative",
  bottom: 1100,
  border: "3px solid blue",
  height: 190,
};
const fotele = {
  position: "relative",
  left: 550,
};
const finput = {
  width: 150,
};
const center = {
  position: "relative",
  right: 35,
};
const img = {
  width: 200,
  height: 200,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
};
export default function MyApp() {
  return (
    <body>
      <Banner style={styles} textSize={20}>
        <p style={para}>La maison jungle</p>
      </Banner>

      <Sidebar style={side}>
        <div style={side} id="sidebar">
          <div style={after}>
            <h2>Panier</h2>
            <ul>
              <li>Produit1 100£</li>
              <li>Produit2 25£</li>
            </ul>
            <h3>Total = 125£</h3>
            <br />
            <button>Ajouter au panier</button>
          </div>
        </div>
      </Sidebar>

      <Categories>
        <div style={gori}>
          <div>
            <input style={input} name="myInput" defaultValue="Plante" />
            <input style={input} name="myInput" defaultValue="Fleur" />
          </div>
        </div>
      </Categories>

      <ShoppingList></ShoppingList>
      <Footer>
        <div style={footer}>
          <div style={fotele}>
            <h3 style={center}>Pour les pasionné-es de plantes</h3>
            <p>Laissez nous votre e-mail:</p>
            <input
              style={finput}
              name="myInput"
              defaultValue="Entrez votre email"
            />
          </div>
        </div>
      </Footer>
    </body>
  );
}
