import { useLoaderData, useParams } from "react-router-dom";
import BriefNewsCard from "../BriefNewsCard/BriefNewsCard";

function Category() {
  const { id } = useParams(); // getting from front end
  const categoryNews = useLoaderData(); // loading from server
  return (
    <>
      {/* <h3>Category ID: {id}</h3> */}
      {id && <h3>Category ID: {id}</h3>}
      {/* <h4>Total News: {categoryNews.length}</h4> */}
      {id && <h4>Total News: {categoryNews.length}</h4>}
      {categoryNews.map((news) => (
        <BriefNewsCard key={news._id} news={news} />
      ))}
    </>
  );
}

export default Category;
