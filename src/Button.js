import "./App.css";
import plus from "./plus-svgrepo-com.svg";
import trash from "./trash-blank-alt-svgrepo-com.svg";

function Button(props) {
  return (
    <div className={"p-2.5 " + props.scale}>
      {/* TODO сделать чтоб интервал сохранялся при изменении масштаба */}
      <button
        className={
          "flex items-center gap-1 " +
          props.color +
          " text-black py-2 px-4 " +
          props.rounded +
          " hover:" +
          props.color +
          " transition duration-300 ease-in-out transform hover:scale-110"
        }
      >
        <img className="w-6 h-6" src={props.icon}></img>
        {props.content}
      </button>
    </div>
  );
}
Button.defaultProps = {
  rounded: "rounded-md",
  scale: "scale-100",
  icon: trash,
  color: "red",
};
export default Button;
