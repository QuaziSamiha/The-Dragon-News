import { useParams } from "react-router-dom";

function Category() {
  const { id } = useParams();
  return (
    <>
      <h1>this is category {id}</h1>
    </>
  );
}

export default Category;
