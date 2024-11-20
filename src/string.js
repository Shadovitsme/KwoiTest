import "./App.css";
import Button from "./Button";

function String() {
  return (
    <div className="flex-rowcontainer flex align-items-center pb-5">
      <Button content="a" rounded="rounded-full" color="bg-gray-600" />
      <Button content="aaaaa" scale="scale-125" color="black" />
      <Button content="aaaaa" scale="scale-150" color="bg-gray-800" />
    </div>
  );
}

export default String;
