import React from "react";
import { useNavigate } from "react-router-dom";

function ManagerCard(props) {
  const { phoneID, model, img, price, color } = props;
  let navigate = useNavigate();
  const onChange = (id) => {
    return navigate("/Change/" + id);
  };
  const onDelete = () => {
    if (confirm("Are you sure you want to delete ?") == true) {
      fetch(`https://localhost:5478/Phones/${phoneID}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (res.ok) return navigate("/");
      });
    }
  };
  return (
    <div className="phone-card">
      <img
        src={img}
        alt={model}
        className="phone-card-image"
        width={300}
        height={200}
      />
      <div className="phone-card-details">
        <h3 className="phone-card-model">{model}</h3>
        <p className="phone-card-properties">
          <span className="phone-card-property">Phone ID: {phoneID}</span>
          <span className="phone-card-property">Price: {price}</span>
          <span className="phone-card-property">Color: {color}</span>
        </p>
        <button onClick={() => onChange(phoneID)}>Change</button>
        <button onClick={() => onDelete()}>Delete</button>
      </div>
    </div>
  );
}

export default ManagerCard;
