import React from 'react'; //imr 
import ReactDOM from 'react-dom/client';
// antes pq ele antes de renderizar interpreta a fonte
import "./assets/fontes/GandhiSans-Regular.otf";
import "./assets/fontes/GandhiSans-Bold.otf";
import App from './App';
// a fonte ja pode ser utilizada agora temos alem da fonte do navegador mais duas fontes direto do projeto
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);