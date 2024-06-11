import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Link to="/">
        <header className="website-header">XXXMuck</header>
      </Link>
      <Outlet />
    </>
  );
};
