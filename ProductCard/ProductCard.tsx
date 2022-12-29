import {Link} from "react-router-dom";
import {ProductCard as Product} from "../../response-types/ResponseTypes"
import Image from "../Image/Image";
import { RiSendPlaneFill } from "react-icons/ri";
import {useState} from "react";
import Requests, {Url} from "../../requests/Requests";

const ProductCard = (props:Product) => {
  const [comment, setComment] = useState<string>("")
  const dateString = props.date.toString().split("T")[0];

  const handleSubmit = () => {
    const data = {
      uid: props.uid,
      pid: props.pid,
      comment
    };
    Requests.post(Url.PRODUCT, "comment", data);
  }

    return (
      <div className="product-card productSection">
        <div className="card">

          <div className="user-info">
            <div className="card-profile-pic"></div>

              <strong className="username">{props.username}</strong>

          </div>

          <div className="product-info">
            <p className="card-description">{props.description}</p>
            {
              props.tags.map(tag => (
                <Link to={"/"} className="tag">#{tag}</Link>
              ))
            }
              <p className="post-date">Posted at:{dateString}</p>
          </div>
          <div className="product-image">
          <Image 
            image={props.image}
            class="primaryImg" 
          />
          </div>
          <div className="product-comment-bar">
            <input 
              value={comment}
              placeholder="Add a comment..."
              className="product-comment"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                setComment(e.target.value)
              }}
            />
            <RiSendPlaneFill 
              color="darkgrey"
              className="product-send"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    )
}

export default ProductCard
