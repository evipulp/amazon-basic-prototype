import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="Mitti Ke Diye (Hindi)"
          price={390}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51hvoTjfkFL._SX347_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321342"
          title="Ashwati
          Women's Rayon Regular Kurta"
          price={670}
          rating={4}
          image="https://m.media-amazon.com/images/I/71n01OLOW9L._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="
          OnePlus 7T Pro (Haze Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4085mAH Battery)"
          price={47999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SL1500_.jpg"
        />
        <Product
          id="12321344"
          title="
          Samsung 6.5 Kg Fully-Automatic Front Loading Washing Machine (WW65R20GLSW/TL, White)"
          price={25990}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71uaU5HUjvL._SL1500_.jpg"
        />
        <Product
          id="12321345"
          title="
          Amazon Brand - Solimo Mystic Drops 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Pink"
          price={799}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91M%2BfrtuNdL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321349"
          title="Samsung 163 cm (65 Inches) Q Series 4K Ultra HD QLED Smart TV QA65Q8CNAK (Black) (2018 model)"
          price={258999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81piVC2laHL._SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
