// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import { Provider } from "react-redux";
// import store from "./redux/store.js";
// import { BrowserRouter } from "react-router-dom";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <Header />
//         <App />
//         <Footer />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );



import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation (e.g., fetching data)
    // In a real application, replace this with your actual loading logic
    const fetchData = async () => {
      // Simulating a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          {loading ? (
            <Loader/>
          ) : (
            <>
              <Header />
              <App />
              <Footer />
            </>
          )}
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
