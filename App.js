import React from "react";
import ReactDOM from "react-dom/client";

const styleCard = {
  backgroundColor: "#eae2de",
};

const resObj = {
  restaurant: {
    id: 1001,
    name: "Food Paradise",
    location: "Bangalore",
    rating: 4.6,
    deliveryTime: "30-40 mins",
    menu: {
      starters: [
        {
          id: 1,
          name: "Paneer Tikka",
          description: "Grilled paneer cubes with spices",
          price: 220,
          isVeg: true,
        },
        {
          id: 2,
          name: "Chicken Lollipop",
          description: "Crispy fried chicken wings",
          price: 280,
          isVeg: false,
        },{
          id: 3,
          name: "Briyani",
          description: "Crispy fried chicken wings",
          price: 280,
          isVeg: false,
        },{
          id: 4,
          name: "Chowman",
          description: "Crispy fried chicken wings",
          price: 280,
          isVeg: false,
        },{
          id: 5,
          name: "chocklate",
          description: "Crispy fried chicken wings",
          price: 280,
          isVeg: false,
        },
      ],
    },
  },
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCagRLYkLeTBEd0qc-6FLb6lnyxJXaBw_Fw&s"
          alt="image"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resList } = props;

  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-logo"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2026/3/12/5cba5fc8-dded-4783-8c78-a3f455c6cfa6_b8256804-ad42-494e-9b14-1d311d4ff0ad.jpeg"
      />

      <h3>{resList.name}</h3>
      <h4>{resList.description}</h4>
      <h4>₹{resList.price}</h4>
      <h4>{resList.isVeg ? "Veg" : "Non Veg"}</h4>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="body">
      <div className="search">
       Search
      </div>

      <div className="res-container">
        {resObj.restaurant.menu.starters.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Homepage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);