import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Registro.css';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones básicas
    if (!username || !email || !password || !confirm) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Obtener usuarios guardados
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el email ya existe
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      setError("Este correo ya está registrado");
      return;
    }

    // Guardar nuevo usuario
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("¡Registro exitoso! Redirigiendo...");
    
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registro</h2>

        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">{success}</p>}

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label>Nombre de usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirmar contraseña:</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>

        <p className="register-footer">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}