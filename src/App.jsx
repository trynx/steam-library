import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./page/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // children: [
    //   {index: true, element: <MainPage />}
    // ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
