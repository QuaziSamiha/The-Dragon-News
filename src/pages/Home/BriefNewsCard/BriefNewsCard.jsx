/* eslint-disable react/prop-types */
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function BriefNewsCard({ news }) {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image
            style={{ height: "40px", width: "40px" }}
            src={author.img}
            rounded
          />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>{moment(author.published_date).format("yyyy-MM-DD")}</p>
          </div>
          <div>
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {/* {details} */}
            {details.lenght < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="flex-grow-1 d-flex">
            <Rating
              readonly
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default BriefNewsCard;
