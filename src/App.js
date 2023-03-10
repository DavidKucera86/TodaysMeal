import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OwnRecipes from "./pages/OwnRecipes";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import Movies from "./pages/Movies";
import GlobalStyles from "./components/styles/Global";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/recipes" element={<OwnRecipes />} />
              <Route path="/detail/:idDetail" element={<Detail />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
