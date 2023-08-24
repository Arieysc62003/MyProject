import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Change = () => {
  let { id } = useParams();
  const [imageData, setImageData] = useState("");
  const [edit, setEdit] = useState({
    model: "",
    price: 0,
    imageData: imageData,
    color: "",
    details: "",
  });

  let navigate = useNavigate();
  useEffect(() => {
    fetch(`https://localhost:5478/Phones/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImageData(data.imageData);
        setEdit(data);
      });
  }, []);
  const changeDetails = async () => {
    const jsonData = JSON.stringify(edit);

    await fetch(`https://localhost:5478/Phones/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    });
    return navigate("/manager");
  };
  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const imageChange = (e) => {
    setImageData(e.target.value);
  };

  return (
    <div className="app">
      <h1>Change Card</h1>
      <div className="details" key={edit.phoneId}>
        <div className="big-img">
          <img
            src={
              imageData !== ""
                ? imageData
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///+LjY+HiYuwsrP7+/uFh4m+v8Di4+OBhIbU1dX4+PjGx8jc3d2AgoXBwsOoqquQkpS3uLmio6WcnZ/p6uqWmJnx8fHNzs/R0dLm5+cIJMWDAAACgUlEQVR4nO3d2W7CMBBG4WIwdRaWhLXv/6IFVCFKA5OBqL9pz3c9an3kLOYqb28AAAAAAAAAAODfWhfVfPqYebFWr95UL0YphofFtJyW6oZ73jcpjJ4UUqXOuK1Jz+adxFYdcssiDhJ42MaNOqXbeKjAQ2KWu1jMBgs8XKg53osD9h0T83uiVsNdo0dhqg76YWnuSvrGTFQHXdtaS471pLywtd6bKbfTTWFdpPHj2/zEKow7Ucktc2vFYV5c2hvj+d2IjXlaC/GSPT5WJ10ZP30epVCNQgpfpDAOJdfCMBnojx2PAxT+OgpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJSg0IVCCQpdKJQ4Fv7975D+g2/JUnha+d8uDLEdt/Z31V+3MC7Kw2i5iK9Y2PQoPC964RnORdVj0fE83WMTw1xY06W2F32xKz02MRbCmi6TmWdXpnbhrBTWdGrtwuY83OOuXQlbutXJXPToPLw0R1MtbLlhY6467r5GC/um3Uhbuq3tTYz702SPwLQW13Ta2w+buKr21apH4M7+dwo7O/Fwbuvx4ky5vQvP6jDEL4zwdTFnadLM+pw57/aldqvOuKvctaOUHv1tn+KyyfIZc2X7/qD6I7uDDAAAAAAAAAAA+D2fnUAnjtMZhT0AAAAASUVORK5CYII="
            }
            alt=""
          />
        </div>
        <div className="box">
          <div className="row">
            <h2>{edit.model}</h2>
            <span>{edit.price}</span>
          </div>
          <p>{edit.details}</p>
          <form>
            <div className="box">
              <label>
                Model:
                <input
                  name="model"
                  defaultValue={edit.model}
                  onChange={handleChange}
                />
              </label>
              <hr />
              <label>
                Price:
                <input
                  name="price"
                  defaultValue={edit.price}
                  onChange={handleChange}
                />
              </label>
              <hr />
              <label>
                Image:
                <input
                  type="text"
                  name="imageData"
                  defaultValue={imageData}
                  onChange={imageChange}
                />
              </label>
              <hr />
              <label>
                Color:{" "}
                <input
                  name="color"
                  defaultValue={edit.color}
                  onChange={handleChange}
                />
              </label>
              <hr />
              <label>
                Details:
                <input
                  name="details"
                  defaultValue={edit.details}
                  onChange={handleChange}
                />
              </label>
              <hr />
            </div>
          </form>

          <button className="cart" onClick={() => changeDetails(edit.phoneID)}>
            Change the Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Change;
