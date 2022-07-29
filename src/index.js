import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content3 from './Content3';
import reportWebVitals from './reportWebVitals';


// Fake auto comment function
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `comment on lession-${id}`
            }) 
        )
    }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    [

        <App />,
    ]
//   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
