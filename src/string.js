import "./App.css";
import Button from "./Button";

function String(props) {
  return (
    <div className="grid grid-cols-4 gap-[4rem] justify-center pb-10">
      <Button rounded="rounded-full" color="bg-gray-600" />
      <Button content="Сохранить" color="bg-black" />
      <Button content="Сохранить" scale="scale-125" color="bg-black" />
      <Button content="Сохранить" scale="scale-150" color="bg-gray-800" />
    </div>
  );
}

export default String;
