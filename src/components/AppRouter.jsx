import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ROUTES} from '../consts/routes'

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map(route => <Route key={route.path} path={route.path} element={<route.component />}/> )}
    </Routes>
  );
};

export default AppRouter;