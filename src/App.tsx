import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from './pages/Home/Home.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
