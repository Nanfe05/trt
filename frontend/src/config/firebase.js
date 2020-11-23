// Firebase
import firebase from "firebase/app";
import "firebase/analytics";
import 'firebase/auth';



const firebaseConfig={
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATA_BASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

let defaultProject =firebase.initializeApp(firebaseConfig);

export const Signin = (email,psswd,name,setAppMsg) =>{
    defaultProject.auth().createUserWithEmailAndPassword(email,psswd).then((user) => {
        user.user.updateProfile({
            displayName:name
        });
        setAppMsg('Te has registrado exitosamente!');
       })
       .catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         setAppMsg('Error registrando usuario!');
       });
}

export const CheckIfLogged = (name,setUser,setAppMsg) =>{
    defaultProject.auth().onAuthStateChanged(function(user){
        if(user && !name && user.displayName){
            setUser(user.displayName);
            setAppMsg('Has iniciado sesion correctamente!')
        }
    })
};

export const LogOut = (setAppMsg) =>{
    defaultProject.auth().signOut().then(function(){
        setAppMsg('Has cerrado sesion');
    },function(error){
        setAppMsg('Error cerrando sesion');
    })
};

export const Login =(email,password,setAppMsg)=>{
    defaultProject.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        setAppMsg('Inicio de sesion exitoso')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      setAppMsg('Error iniciando sesion!')
    });
};
