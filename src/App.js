/* eslint-disable no-unused-vars */
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import MainPage from './MainPage';
import routes from './routes/routes';
import DropDown from './components/dropdown/DropDown';

function App() {

  return (
    <section className="App">
      <Menu />
      <DropDown/>
      
      <Routes>
        <Route path={routes.home} element={<MainPage />}/>
      </Routes>

    </section>
  );
}

export default App;
