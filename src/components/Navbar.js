import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/single">single</Link>
        </li>
      </ul>
    </div>
  );
}
