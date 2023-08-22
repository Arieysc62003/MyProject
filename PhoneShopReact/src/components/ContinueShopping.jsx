import { Link } from "react-router-dom";
import { ArrowFatLeft } from "phosphor-react";
import "../css/Cart.css";

function ContinueShopping(props) {
  const { message } = props;
  return (
    <div className="start-shopping">
      <Link to="/">
        <ArrowFatLeft width={20} height={20} />
        <span> {message}</span>
      </Link>
    </div>
  );
}

export default ContinueShopping;
