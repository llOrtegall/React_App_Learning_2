import { createRoot } from "react-dom/client";
import App from './src/App.jsx'
// TODO: recordar importar y cambiar las extesiones de js a jsx para evitar error

const root = createRoot(document.getElementById("app"));

root.render(<App/>);