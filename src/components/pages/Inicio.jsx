import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      setError('Email o contraseña incorrectos');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify({
      username: user.username,
      email: user.email
    }));

    alert(`¡Bienvenido/a ${user.username}!`);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button type="submit">Entrar</button>
        </form>

        <p>
          ¿No tienes cuenta? <Link to="/Registro">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}
