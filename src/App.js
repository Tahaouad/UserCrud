import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListUsers from './components/ListUsers';
import AjouterUser from './components/AjouterUser';
import ModifierUser from './components/ModifierUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<ListUsers />}/>
          <Route path={'/Ajouter'} element={<AjouterUser /> }/>
          <Route path={'/Modifier/:id'} element={<ModifierUser /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
