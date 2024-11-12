import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizza = [
    { id: 1, name: "Spinaci Pizza", ingredients: "Tomato, Mozzarella, Spinach, and Ricotta Cheese", price: "$15.90", image: "pizzas/spinaci.jpg" },
    { id: 2, name: "Salamino Pizza", ingredients: "Tomato Sauce, Mozzarella Cheese, Salami, Olive Oil, Oregano", price: "$16.80", image: "pizzas/salamino.jpg" },
    { id: 3, name: "Prosciutto Pizza", ingredients: "Tomato Sauce, Mozzarella Cheese, Prosciutto, Arugula, Parmesan", price: "$16.50", image: "pizzas/prosciutto.jpg" },
    { id: 4, name: "Margherita Pizza", ingredients: "Tomato Sauce, Mozzarella Cheese, Fresh Basil, Olive Oil, Parmesan", price: "$17.90", image: "pizzas/margherita.jpg" }
];

function Pizza({ name, ingredients, price, image }) {
  return (
    <div>
      <img src={image} alt={name} width="300" />
      <h2 id="name">{name}</h2>
      <p id="ingredients">Ingredients: {ingredients}</p>
      <p id="price">{price}</p>
    </div>
  );
}

function Menu() {
  return (
    <div id="menu">
      <h2>Our Menu</h2>
      <div className="pizza-list">
        {pizza.map(pizzaItem => (
          <Pizza
            key={pizzaItem.id}
            name={pizzaItem.name}
            ingredients={pizzaItem.ingredients}
            price={pizzaItem.price}
            image={pizzaItem.image}
          />
        ))}
      </div>
    </div>
  );
}

function Order() {
    return(
        <div className="order">
            <button id="button">Place an Order</button>
        </div>
    )
}

function Header() {
    return <h1 style={{color: "orange", fontSize: "48px"}}>Elyza's Pizza Co.</h1>;
}

function Footer() {
    const time = new Date().getHours();
    const isOpen = time > 10 && time < 22 ? true : false;
    return(
        <div id = "footer">
            { isOpen ?  "We're Currently Open" : "Sorry, we're closed" }
        </div>
    )
}

function App() {
    return (
        <div className = "container">
            <div className = "title-column">
                <Header />
                <Footer />  
                <Order />
            </div>
            <Menu />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

