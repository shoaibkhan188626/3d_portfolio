import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
      Exploring a potential project? Get in touch. <br className="sm:block hidden" />
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
