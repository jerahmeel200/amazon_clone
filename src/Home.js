import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12122333"
            title="the lean startup How  content inovation  create, radical successful business"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
          />
          <Product
            id="17272982"
            title="Stand Mixer, POWWA 7.5 Quart Electric Mixer, 6+1 Speed 660W"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71DNBIi6T8L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2323445"
            title="Fitbit Versa 2 Health and Fitness Smartwatch"
            price={299.9}
            rating={8}
            image="https://m.media-amazon.com/images/I/71jiGaztijL._AC_UY218_.jpg"
          />
          <Product
            id="12236"
            title="(Renewed) Apple AirPods Pro"
            price={266.99}
            rating={6}
            image="https://m.media-amazon.com/images/I/71eGsUPZm2L._AC_UL320_.jpg"
          />
          <Product
            id="23666"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi "
            price={22.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61GrEskUMAL._AC_UY218_.jpg"
          />
        </div>
        <div classname="home__row">
          <Product
            id="1244"
            title="LG 75SM9070PUA Alexa Built-in Nano 9 Series 75' 4K Ultra HD Smart LED NanoCell TV (2019)"
            price={3.99}
            rating={20}
            image="https://m.media-amazon.com/images/I/818qDjCPuwL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
