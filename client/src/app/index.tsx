import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import routes from './routes';
import Loading from './components/loading'

function App() {
  return (
    <Routes>
      {routes.map(({ component: Component, path, ...rest }) => (
        <Route
          path={path}
          key={path}
          {...rest}
          element={
            <React.Suspense fallback={<Loading />}>
              <Component />
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
