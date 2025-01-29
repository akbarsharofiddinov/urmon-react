import React from "react";
import { Layout } from "@/components";
import {
  About,
  Administration,
  AllNews,
  Home,
  PhotoGallery,
  VideoGallery,
  Tv,
} from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/all-news",
          element: <AllNews />,
        },
        {
          path: "/photo-gallery",
          element: <PhotoGallery />,
        },
        {
          path: "/video-gallery",
          element: <VideoGallery />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/administration",
          element: <Administration />,
        },
        {
          path: "/tv",
          element: <Tv />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
