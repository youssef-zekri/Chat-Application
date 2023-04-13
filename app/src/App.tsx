import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <ToastContainer />
          <Routes>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={
                  <route.layout>
                    <route.component />
                  </route.layout>
                }
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
