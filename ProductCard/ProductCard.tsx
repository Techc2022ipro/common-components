import {Link} from "react-router-dom";
import {ProductCard as Product} from "../../response-types/ResponseTypes"
import Image from "../Image/Image";

const ProductCard = (props:Product) => {
  const dateString = props.date.toString().split("T")[0];
  
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
          <input 
            placeholder="Add a comment..."
            className="product-comment"
          />
        </div>
      </div>
    )
}

export default ProductCard
