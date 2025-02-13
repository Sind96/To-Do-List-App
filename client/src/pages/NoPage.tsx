import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NoPage;
