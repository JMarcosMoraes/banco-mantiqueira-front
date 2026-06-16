"use client";

import Image from "next/image";
import "./Login.css";
import { useRouter } from "next/navigation";
import logo from "../assets/Logo_marca.png";
import qr from "../assets/Logo_marca_02.png";

function Login() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Login submit - redirecting to /dashboard");
      router.push("/dashboard");
      // fallback in case router.push doesn't navigate
      setTimeout(() => {
        if (window.location.pathname !== "/dashboard") {
          window.location.href = "/dashboard";
        }
      }, 200);
    } catch (err) {
      console.error("router.push error:", err);
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="login-container">
      {/* Logo fora do card */}
      <Image src={logo} alt="Banco Mantiqueira" width={140} height={60} className="bank-logo-outside" />
      <div className="login-card">
        
        {/* Título */}
        <h2 className="access-title">Acesso ao Sistema</h2>

         <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">
              <i className="fas fa-user"></i>
            </span>
            <input type="text" id="username" placeholder="Nome de Usuário" />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <i className="fas fa-lock"></i>
            </span>
            <input type="password" id="password" placeholder="Senha" />
          </div>

          <a href="#" className="forgot-password">Esqueceu a senha?</a>

          <button type="submit" className="login-button">ENTRAR</button>
        </form>

        <div className="secure-login">
          <h3>Login Seguro</h3>
          <div className="qr-section">
            <Image src={qr} alt="QR Code" width={120} height={120} className="qr-image" />
            <p>Acessar com QR Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

