import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import NotFound from './pages/not-found';
import Layout from './pages/layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
