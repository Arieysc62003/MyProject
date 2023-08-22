import PhoneCard from "../components/PhoneCard";
import { useState, useEffect } from "react";
import Search from "../components/Search";

function Shop() {
  const [query, SetQuery] = useState("");
  const [price, SetPrice] = useState(8000);
  const [fetchPhones, SetFetchPhones] = useState(null);

  function Data() {
    fetchPhones && console.log(fetchPhones);
  }
  useEffect(() => {
    fetch("https://localhost:5478/Phones")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetFetchPhones(data);
      });
  }, []);
  return (
    <div className="phone-card-container">
      <Search SetQuery={SetQuery} price={price} SetPrice={SetPrice} />
      {fetchPhones &&
        fetchPhones
          .filter(
            (phone) =>
              phone.model.toLowerCase().includes(query.toLowerCase()) &&
              phone.price < price
          )
          .map((phone, index) => (
            <PhoneCard
              key={index}
              phoneID={phone.phoneId}
              model={phone.model}
              img={phone.imageData}
              price={phone.price}
              color={phone.color}
            />
          ))}
      <button onClick={Data}>Fetch Data</button>
    </div>
  );
}

export default Shop;
