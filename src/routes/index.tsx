import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ROUTES } from '../constants';
import { Layout, NotFoundPage, Main, Card } from '../pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={ROUTES.MAIN}
        element={<Layout />}
        errorElement={<NotFoundPage />}
      >
        <Route index element={<Main />} />
        <Route path={ROUTES.CARD} element={<Card />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </>,
  ),
  {
    basename: '/',
  },
);
