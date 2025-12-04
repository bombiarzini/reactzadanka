import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import ItemList from './components/ItemList'; 
import UserGretting from './components/ItemList';
import ColorPicker from './components/ItemList';
import TextToggle from './components/TextToggle';
import PasswordToggle from './components/PasswordToggle';
import OknoModal from './components/OknoModal';
import DarkModeToggle from './components/DarkModeToggle';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import CityList from './components/CityList';
import CityListOnClick from './components/CityListOnClick';
function UserList(){
  return(
    <div>
      <CityListOnClick />
    </div>
  );
}

export default UserList;
