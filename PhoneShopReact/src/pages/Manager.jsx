import { useState, useEffect } from "react";
// import { phones } from "../data/PhonesData";
import ManagerCard from "../components/ManagerCard";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";

function Manager() {
  const [query, SetQuery] = useState("");
  const [price, SetPrice] = useState(8000);
  const [fetchPhones, SetFetchPhones] = useState(null);

  let navigate = useNavigate();
  const navAddCard = () => {
    return navigate("/AddCard");
  };
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
      <button className="add-phone-card" onClick={navAddCard}>
        <p>+</p>
      </button>
      {fetchPhones &&
        fetchPhones
          .filter(
            (phone) =>
              phone.model.toLowerCase().includes(query.toLowerCase()) &&
              phone.price < price
          )
          .map((phone, index) => (
            <ManagerCard
              key={index}
              phoneID={phone.phoneId}
              model={phone.model}
              price={phone.price}
              color={phone.color}
              img={phone.imageData}
            />
          ))}
    </div>
  );
}

export default Manager;
