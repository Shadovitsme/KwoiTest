import "./App.css";
import String from "./string";

function ManyStrings(props) {
  return (
    <div className="grid col-span-1 pb-20">
      {props.colors.map((color, index) => (
        <String key={index} color={color}></String>
      ))}
    </div>
  );
}
export default ManyStrings;
