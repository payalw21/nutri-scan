// import ReactBarcodeScanner from "react-barcode-scanner";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
// import BarcodeScanner from "./components/BarcodeScanner";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [input, setInput] = useState("");
  const [foodData, setFoodData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Seding HTTPS request....", input);
    const api = `https://world.openfoodfacts.net/api/v2/product/${input}`;

    async function fetchData() {
      try {
        const res = await fetch(api);
        const data = await res.json();
        console.log("Data", data);
        setFoodData(data.product);
        console.log("Food Data", data.product);
      } catch (error) {
        setError(true);
        console.log("error");
      } finally {
        setIsLoading(true);
      }

      console.log("foodData", foodData);
    }

    fetchData();
  }, [input]);

  return (
    <div className="App">
      <Navbar />
      <Input setInput={setInput} />
      <ProductDetail foodData={foodData} />
    </div>
  );
}

export default App;
