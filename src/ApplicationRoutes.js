import React from "react";
import { Route } from "react-router-dom";
import { MoviesList,MovieDetail } from "./components";
import { PlayLists } from "./components/PlayLists";

const Routes = [
  {
    path: "/",
    component: MoviesList
  },
  {
    path: "/movies/:id",
    component: MovieDetail
  },
  {
    path: "/playlists/",
    component: PlayLists
  }
];

export const ApplicationRoutes = () => (
  <>
    {Routes.map((r) => (
      <Route path={r.path} exact component={r.component} />
    ))}
  </>
);
