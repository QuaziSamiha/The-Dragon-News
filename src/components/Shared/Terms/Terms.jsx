import { Link } from "react-router-dom";

function Terms() {
  return (
    <>
      <div>
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          accusamus quis quia delectus cupiditate officiis itaque sit eius
          alias, commodi expedita temporibus provident, voluptates facere
          excepturi aperiam aut nostrum nesciunt repudiandae rem. Tempora,
          deserunt rerum labore a sed culpa omnis fuga cum quasi repudiandae,
          maxime minima. Nisi doloribus voluptatum sapiente?
        </p>
        <p>
          Go Back to <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
}

export default Terms;
