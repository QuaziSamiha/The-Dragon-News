import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <>
      <section>
        <h4>All Category</h4>
        <div>
          {categories.map((category) => (
            <p key={category.id}>
              <Link
                to={`/category/${category.id}`}
                className="text-decoration-none text-secondary"
              >
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

export default LeftNav;
