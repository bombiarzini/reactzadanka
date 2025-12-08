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
import Alert from './components/Alert';
function UserList(){
  return(
    <div>
   <Alert type="success"> 
    <strong>Błąd!</strong> Wystąpił problem.
    </Alert> 
    </div>
  );
}

export default UserList;
