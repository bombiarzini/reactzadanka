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
import PrzyciskOnDoubleClick from './components/PrzyciskOnDoubleClick';
import RozmiaryPrzycisku2 from './components/RozmiaryPrzycisku2';
import AlertVisible from './components/AlertVisible';


function UserList(){
  return(
    <div>
   <Alert type="success"> 
    <strong>Błąd!</strong> Wystąpił problem.
    </Alert>

    <AlertVisible>
  
    </AlertVisible>
    
    </div>
  );
}

export default UserList;
