const Button = (props: {value: string, type: "submit" | "reset"}) => { 
  return (
    <button type={props.type} className="btn">{props.value}</button>
  )
}

export default Button;
