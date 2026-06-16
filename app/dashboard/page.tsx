// pages/index.js
import Image from "next/image";
import logo from "../assets/Logo_marca.png";
import "../login/Login.css";

export default function Dashboard() {
  return (
    <div className="login-container min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center text-white font-sans">
      {/* Header */}
      <header className="w-full flex justify-center py-6">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Banco Mantiqueira" width={40} height={40} />
          <h1 className="text-2xl font-bold">Banco Mantiqueira</h1>
        </div>
      </header>

      {/* Saudação */}
      <div className="text-center mt-4">
        <h2 className="text-lg">Bem-vindo, João</h2>
        <p className="text-3xl font-bold mt-2">R$ 3.250,78</p>
      </div>

      {/* Botões principais */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow">
          Movimentações
        </button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow">
          e-Cheque
        </button>
      </div>

      {/* Extrato */}
      <section className="bg-white text-black w-11/12 md:w-2/3 rounded-lg shadow mt-8 p-4">
        <h3 className="text-lg font-semibold mb-4">Extrato</h3>
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span>Depósito Recurso (23/04)</span>
            <span className="text-green-600 font-bold">+R$ 1.000,00</span>
          </li>
          <li className="flex justify-between">
            <span>Pix Supermercado (12/04)</span>
            <span className="text-red-600 font-bold">-R$ 215,00</span>
          </li>
          <li className="flex justify-between">
            <span>TED Aluguel (18/04)</span>
            <span className="text-red-600 font-bold">-R$ 1.200,00</span>
          </li>
          <li className="flex justify-between">
            <span>e-Cheque Recebido (15/04)</span>
            <span className="text-green-600 font-bold">+R$ 500,00</span>
          </li>
        </ul>
      </section>

      {/* Botões inferiores */}
      <div className="flex flex-col space-y-3 mt-6 w-11/12 md:w-2/3">
        <button className="bg-blue-700 text-white py-2 rounded-lg shadow">
          Ver Todas Movimentações
        </button>
        <button className="bg-blue-700 text-white py-2 rounded-lg shadow">
          Acessar Carteira e-Cheque
        </button>
      </div>
    </div>
  );
}
