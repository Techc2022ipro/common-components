
const ProductCard = (props: {description: string}) => {
    return (
        <div className="Product-card">
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard