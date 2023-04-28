import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from './pages/about-us/about-us';
import NotFound from './pages/not-found/not-found';
import FormPage from './pages/form-page/form-page';
import Layout from './pages/layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<FormPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
App.defaultProps = { serverFlag: false };

export default App;
