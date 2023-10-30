import { Link } from "react-router-dom";

import "./styles.css";

function Root() {
  return (
    <div>
      <h1 className="root-title">React Hook Form + Zod</h1>

      <div className="root-list">
        <Link to="/basic-react-form">Basic Form React</Link>
        <Link to="/hook-form-register">React Hook Form Register</Link>
        <Link to="/hook-form-zod">React Hook Form + Zod</Link>
      </div>
    </div>
  );
}

export default Root;
