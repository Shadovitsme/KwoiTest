import "./App.css";
import Button from "./Button";
import plus from "./plus-svgrepo-com.svg";

function String(props) {
  return (
    <div className="grid grid-cols-4 gap-[4rem] justify-center pb-10">
      <Button rounded="rounded-full" color={props.color} icon={plus} />
      <Button content="Сохранить" color={props.color} />
      <Button content="Сохранить" scale="scale-125" color={props.color} />
      <Button content="Сохранить" scale="scale-150" color={props.color} />
    </div>
  );
}

export default String;
