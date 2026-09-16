import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { FavoritesProvider } from "./context/FavoritesProvider";

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;
