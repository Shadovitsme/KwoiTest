import "./App.css";
import plus from "./plus-svgrepo-com.svg";

function App(props) {
  return (
    <div className={"p-2.5 " + props.scale}>
      {/* TODO сделать чтоб интервал сохранялся при изменении масштаба */}
      <button
        className={
          "flex items-center gap-1 bg-" +
          props.color +
          " text-white py-2 px-4 rounded-" +
          props.rounded +
          " hover:bg-" +
          props.color +
          " transition duration-300 ease-in-out transform hover:scale-110"
        }
      >
        <img class="w-6 h-6" src={plus}></img>
        {props.content}
      </button>
    </div>
  );
}
App.defaultProps = { rounded: "md", scale: "scale-100", color: "gray-600" };
export default App;
