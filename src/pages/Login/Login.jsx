import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [dni, setDni] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Llama al servicio REST para obtener el token

      const options = {
        method: "POST",
        url: "https://us-central1-com-agendame-cl.cloudfunctions.net/signInWithDNI",
        headers: {
          "content-type": "application/json",
        },
        data: [
          {
            dni: { dni },
          },
        ],
      };

      axios
        .request(options)
        .then(function (response) {
          // Almacena el token en localStorage o en el estado de la aplicación según sea necesario
          const token = response.data.token;
          // Guarda el token en localStorage o en el estado de tu aplicación
          localStorage.setItem("firebaseToken", token);

          // Redirige después del inicio de sesión
          navigate("/agenda"); // Cambia '/agenda' por la ruta deseada
        })
        .catch(function (error) {
          setLoginError(error);
          console.error(error);
        });
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setLoginError(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        DNI:
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Iniciar Sesión</button>

      {loginError && <p style={{ color: "red" }}>{loginError}</p>}
    </div>
  );
};

export default Login;
