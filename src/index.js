import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from "./Button";
import reportWebVitals from "./reportWebVitals";
import String from "./string";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex justify-center items-center h-screen">
      <div className="grid col-span-1">
        <String></String>
        <String></String>
      </div>
    </div>
  </React.StrictMode>
);

// TODO сделать иконки в кнопочках переменныыми
// TODO сделать компонент-цикл который и будет выводить нужное количество строк с разными цветами кнопок коды цветов передавать как массив и скармливать таилвинду.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
