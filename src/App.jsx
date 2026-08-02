import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import HowWeAre from './Pages/HowWeAre/HowWeAre';
import NotFound from './Pages/NotFound/NotFound'
import BlogDetails from "./Pages/Blog/BlogDetails";
import Privacy from "./Pages/Privacy/Privacy";
import TermsofService from "./Pages/TermsofService/TermsofService";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:slug", element: <BlogDetails /> },
        { path: "about", element: <HowWeAre /> },
        { path: "privacy-policy", element: <Privacy /> },
        { path: "terms-of-service", element: <TermsofService /> },
        { path: "*", element: <NotFound /> },
      ],
    },
]);

function App() {
  return <RouterProvider router={routes} />
}

export default App
