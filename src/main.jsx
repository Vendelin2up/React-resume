import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import "./App.css";
import ContactForm from "./pages/Contact.jsx";
import { Provider } from "react-redux";
import { store } from "./components/Store.js";
import App from "./App.jsx";

// Länkar i headern ska vara här
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Layout = ({ links }) => (
  <div>
    <Header links={links} />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/", // start?
    element: <Layout links={links} />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> }, // tar mig till about
      { path: "projects", element: <Projects /> }, // '/projects' route
      { path: "contact", element: <ContactForm /> }, // kontakt route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
// Blev att jag gjorde allt det här i main istället för app.jsx då en av videosarna jag har följt som en tutorial
// för en del av projektet arbetade här, så då blev det så för mig med.
// Men jag pratade lite med Christoffer ifrån Zocom om det och han sa att det inte spelar någon roll egentligen
// så det kändes lite uppmuntrande.
