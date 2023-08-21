import React from "react";
import { useNavigate } from "react-router-dom";

function PhoneCard(props) {
  const { phoneID, model, img, price, color } = props;
  let navigate = useNavigate();
  const onDetails = (id) => {
    return navigate("/Details/" + id);
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
          <span className="phone-card-property">Price: {price}</span>
          <span className="phone-card-property">Color: {color}</span>
        </p>
        <button onClick={() => onDetails(phoneID)}>More Details</button>
      </div>
    </div>
  );
}

export default PhoneCard;
