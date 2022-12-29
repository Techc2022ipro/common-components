import {Link} from "react-router-dom";
import {ProductCard as Product} from "../../response-types/ResponseTypes"
import Image from "../Image/Image";
import { RiSendPlaneFill } from "react-icons/ri";
import {useState} from "react";
import Requests, {Url} from "../../requests/Requests";

const ProductCard = (props:Product) => {
  const [comment, setComment] = useState<string>("");
  const [message, setMessage] = useState<string | null>("");
  const [error, setError] = useState<string | null>("");
  const dateString = props.date.toString().split("T")[0];

  const handleSubmit = async() => {
    const data = {
      uid: props.uid,
      pid: props.pid,
      comment
    };
    const addComment = await Requests.post(Url.PRODUCT, "comment", data).catch(err => {
      setMessage(null);
      setError(err);
    });
    if(addComment.message !== "") {
      setError(null);
      setMessage(addComment.message);
    }
    setComment("");
  }

    return (
      <div className="product-card productSection">

        {error ? <p className="error-banner">
        <strong onClick={()=>{setError(null);}} className="close-banner">x</strong>  
        {error}
        </p>: null} 

        {message ? <p className="message-banner">
          <strong onClick={()=>{setMessage(null);}} className="close-banner">x</strong>
        {message}
        </p>: null} 
        <div className="card">

          <div className="user-info">
            <div className="card-profile-pic"></div>

              <strong className="username">{props.username}</strong>

          </div>

          <div className="product-info">
            <p className="card-description">{props.description}</p>
            {
              props.tags.map(tag => (
                <Link to={"/"} className="tag" key={tag + props.pid}>#{tag}</Link>
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
