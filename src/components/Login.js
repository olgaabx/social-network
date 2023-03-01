import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from '../firebase/config';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const onClickSignUp = () => {
    navigate("/signup")
  }

  return (
    <div id="loginDiv" className="login-container">
      <div className="logo-title-container">
        <div className="logo-circle">
          <p className="logo-title">
            Social Context
          </p>
        </div>
      </div>

      <div className="form-container">
        <p className="description">
          Ingresa tus datos
        </p>

        <form 
          className="form" 
          id="form"
          onSubmit={onSubmitLogin}
        >
          <input 
            type="email" 
            id="email" 
            placeholder="Correo electrónico" 
            className="input input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            
          <input 
            type="passwor
            d" 
            id="password" 
            placeholder="Contraseña" 
            className="input input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input 
            type="submit" 
            value="Ingresar" 
            id ="login-button" 
            className="primary-button login-button"/>
        </form>

        <div 
        className="icon-container"
        >
          <button 
            id='gmailIcon' 
            className="gmailButton"
          > 
            <img 
              src="https://sugope.vteximg.com.br/arquivos/iconGoogle.svg?v=637677744074800000" 
              title="Ingresa con Google" alt='' 
            />
            Ingresa con Google 
          </button>
        </div>
          <p 
          className="login-register-text">
            ¿No tienes una cuenta?
          </p>
          <button 
          className="link" 
          id="registrate"
          onClick={onClickSignUp}
          > 
            Regístrate
          </button>
      </div>
    </div>
  )
};

export { Login };