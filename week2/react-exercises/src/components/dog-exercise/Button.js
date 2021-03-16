const Button = ({ getDogPhotoOnClick }) => {
  return (
    <div>
      <button onClick={getDogPhotoOnClick}>Get a dog!</button>
    </div>
  )
}

export default Button;
