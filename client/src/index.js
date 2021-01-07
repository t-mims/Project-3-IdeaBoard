import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const { render } = ReactDOM;

let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}

render(<App images = {images} brakePoints={brakePoints} />, app);
