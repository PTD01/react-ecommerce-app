import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CountDown from "./Components/CountDown";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([0]);
//On veut rajouter des produits qui ont ete cliques dessus dans notre panier
  const addToCart = (product) => {
    const prod = cart.filter((item) => {
      //mais on veux que pour chaque produit cliquee on incremente une seule fois alors on verifie si so id existe deja
      return (item.id === product.id);
    })[0];

//Si ce produits n'existe pas encore dans le panier alors ob lui donne un attribut qty qu'om initialise a 1
    if (!prod) {
      product["quantity"] = 1;
      setCart([...cart, product]);
    } else {
      // mettre a jour la liste des produits qui se trouvent dans le panier

      const updatedList = cart.map((item) => {
//si le produit sur lequel on a clique existe deja alors mettre a jour sa quantite
        if (item.id === product.id) {
          return {...item, quantity: item.quantity += 1}
        }
        return item

      })

      setCart(updatedList)
    }
      

    
    
  };

  // const [quantity, setQuantiy] = useState(2);
  const incrementQuantity = (product) => {
    const updatedList = cart.map((item) => {

        if (item.id === product.id) {
          return {...item, quantity: item.quantity += 1}
        }
        return item

      })

      setCart(updatedList)
  };

  const decrementQuantity = (product) => {
    const updatedList = cart.map((item) => {

        if (item.id === product.id) {
          return {...item, quantity: item.quantity -= 1}
        }
        return item

      })

      setCart(updatedList)
  };

  return (
    <div className="App">
      <Header
        length={cart.length}
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <Hero />
      <Main addToCart={addToCart} />
      <CountDown />
      <Footer />
    </div>
  );
}

export default App;
