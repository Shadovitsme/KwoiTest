import "./App.css";

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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M2.75 7.25h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zM2.75 11.25h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zM2.75 15.25h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5z" />
        </svg> */}
        {props.content}
      </button>
    </div>
  );
}
App.defaultProps = { rounded: "md", scale: "scale-100", color: "gray-600" };
export default App;
