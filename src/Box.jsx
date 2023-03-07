export default function Box(props) {
  const boxStyle = {
    position: "absolute",
    top: props.boxTop,
    left: props.boxLeft,
  };

  return (
    <div className="box card text-white bg-primary mb-3" style={boxStyle}></div>
  );
}
