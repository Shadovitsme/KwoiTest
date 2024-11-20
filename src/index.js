import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex-rowcontainer flex align-items-center">
          <App content="a" rounded="full" />
          <App content="aaaaa" rounded="md" scale="scale-150" />
        </div>
        <div>
          <App content="aaaaa" rounded="md" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// TODO сделать скругленную и круглую кнопочку
// TODO сделать иконки в кнопочках переменныыми
// TODO сделать компонент-цикл который и будет выводить нужное количество строк с разными цветами кнопок коды цветов передавать как массив и скармливать таилвинду.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
