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
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:5478/Phones");
        if (response.ok) {
          const data = await response.json();
          SetFetchPhones(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
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
