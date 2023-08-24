import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [image, setImage] = useState("");
  const [add, setAdd] = useState({
    model: "",
    price: 0,
    imageData: image,
    color: "",
    details: "",
  });
  let navigate = useNavigate();

  const addCard = async () => {
    const jsonData = JSON.stringify(add);

    await fetch("https://localhost:5478/Phones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    });
    return navigate("/manager");
  };

  const handleChange = (e) => {
    setAdd((prevAdd) => ({
      ...prevAdd,
      [e.target.name]: e.target.value,
    }));
  };

  const imageChange = (e) => {
    setImage(e.target.value);
    setAdd((prevAdd) => ({
      ...prevAdd,
      [e.target.name]: e.target.value,
    }));
    console.log(image);
    console.log(add.imageData);
  };

  return (
    <div className="app">
      <h1>Add Card</h1>
      <div className="details">
        <div className="big-img">
          <img
            src={
              image !== ""
                ? image
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///+LjY+HiYuwsrP7+/uFh4m+v8Di4+OBhIbU1dX4+PjGx8jc3d2AgoXBwsOoqquQkpS3uLmio6WcnZ/p6uqWmJnx8fHNzs/R0dLm5+cIJMWDAAACgUlEQVR4nO3d2W7CMBBG4WIwdRaWhLXv/6IFVCFKA5OBqL9pz3c9an3kLOYqb28AAAAAAAAAAODfWhfVfPqYebFWr95UL0YphofFtJyW6oZ73jcpjJ4UUqXOuK1Jz+adxFYdcssiDhJ42MaNOqXbeKjAQ2KWu1jMBgs8XKg53osD9h0T83uiVsNdo0dhqg76YWnuSvrGTFQHXdtaS471pLywtd6bKbfTTWFdpPHj2/zEKow7Ucktc2vFYV5c2hvj+d2IjXlaC/GSPT5WJ10ZP30epVCNQgpfpDAOJdfCMBnojx2PAxT+OgpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJQ4Fv7975D+g2/JUnha+d8uDLEdt/Z31V+3MC7Kw2i5iK9Y2PQoPC964RnORdVj0fE83WMTw1xY06W2F32xKz02MRbCmi6TmWdXpnbhrBTWdGrtwuY83OOuXQlbutXJXPToPLw0R1MtbLlhY6467r5GC/um3Uhbuq3tTYz702SPwLQW13Ta2w+buKr21apH4M7+dwo7O/Fwbuvx4ky5vQvP6jDEL4zwdTFnadLM+pw57/aldqvOuKvctaOUHv1tn+KyyfIZc2X7/qD6I7uDDAAAAAAAAAAA+D2fnUAnjtMZhT0AAAAASUVORK5CYII="
            }
            alt=""
          />
        </div>
        <div className="box">
          <div className="row">
            <h2>{add.model}</h2>
            <span>{add.price}</span>
          </div>
          <p>{add.details}</p>
          <form>
            <div className="box">
              <label>
                Model:
                <input name="model" value={add.model} onChange={handleChange} />
              </label>
              <hr />
              <label>
                Price:
                <input name="price" value={add.price} onChange={handleChange} />
              </label>
              <hr />
              <label>
                Image:
                <input
                  type="text"
                  name="imageData"
                  value={image}
                  onChange={imageChange}
                />
              </label>
              <hr />
              <label>
                Color:
                <input name="color" value={add.color} onChange={handleChange} />
              </label>
              <hr />
              <label>
                Details:
                <input
                  name="details"
                  value={add.details}
                  onChange={handleChange}
                />
              </label>
              <hr />
            </div>
          </form>

          <button className="cart" onClick={() => addCard()}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
