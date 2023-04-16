import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

function Layout() {
  return (
    <>
      <Header />
      <main className="wrapperMain">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
