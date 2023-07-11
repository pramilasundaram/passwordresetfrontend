import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';

import {Routes,Route} from "react-router-dom"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Forgotpassword from './pages/forgotpassword/Forgotpassword';
import Passwordreset from './pages/passwordreset/Passwordreset';
import Footer from './components/footer.js/Footer';
import Protected from "./Proctected";
import Provider from "./Provider";
import Emailsender from "./pages/emailsender/Emailsender"

function App() {
  return (  
    <Provider>
   
    <Header />
     <Routes>
     <Route path="/" element={<Login/>}/>  
     <Route path="/register" element={<Register/>}/>    
     <Route path="/forgotpassword" element={<Forgotpassword/>}/>    
     <Route path="/resetpassword/:id/:token" element={<Passwordreset/>}/>  
     <Route path="/home" element={<Protected><Emailsender/></Protected>}/>  
     </Routes>
     <Footer/>    
  
    </Provider>   
  );
}
export default App;

