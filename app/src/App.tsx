import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import { routes } from "./Routes/Routes";
import { ThemeContext } from "./context/theme-context.ts";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme} App`}>
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
    </ThemeContext.Provider>
  );
}

export default App;
