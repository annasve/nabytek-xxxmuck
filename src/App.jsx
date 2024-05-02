import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header className="website-header">
        <Link to="/">XXXMuck</Link>
      </header>
      <Outlet />
    </>
  );
};
