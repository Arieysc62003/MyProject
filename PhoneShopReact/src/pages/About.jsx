import ContinueShopping from "../components/ContinueShopping";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-paragraph">
        Welcome to our Apple Shop application! We are dedicated to providing
        high-quality phones at affordable prices. Our goal is to offer a wide
        range of phone models, colors, and features to suit your needs.
      </p>
      <p className="about-paragraph">
        With our easy-to-use interface, you can browse through our collection,
        view detailed information about each phone, and make a purchase
        securely.
      </p>
      <p className="about-paragraph">
        Feel free to explore our shop and find the perfect phone that fits your
        style and requirements. If you have any questions or need assistance,
        please do not hesitate to contact our support team.
      </p>

      <h2 className="about-title">Site operating conditions</h2>
      <p className="about-paragraph">
        The site contains smartphones from the iPhone company. You can filter
        the options using <br />
        1. Price range ranging from NIS 1,000 to NIS 8,000 <br />
        2. Search using the search bar located under the site's navigation menu
      </p>
      <p className="about-paragraph">
        The navigation menu allows navigation between the About pages, contact,
        shopping cart, and back to the main page.
      </p>
      <p className="about-paragraph">
        On the main page, I have the phones and the option to view more details.
      </p>
      <p className="about-paragraph">
        Each phone has the option to view additional details, and when we enter
        we arrive at a more detailed page of the phone with the price and
        details and the option to add to the cart
      </p>
      <p className="about-paragraph">
        The About page found in the navigation menu is where the explanation of
        the site and how to use it is found
      </p>
      <p className="about-paragraph">
        A contact page in the navigation menu allows us to ask questions or send
        about another message
      </p>
      <p className="about-paragraph">
        In the shopping cart are the products we want to purchase and the amount
        we need to pay
      </p>
      <ContinueShopping message={"Return Shopping"} />
    </div>
  );
}

export default About;
