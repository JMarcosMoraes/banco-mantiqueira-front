"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../assets/Logo_marca.png";
import "../login/Login.css";
import Template from "../components/Template";

export default function Dashboard() {
  const router = useRouter();

  const handleAccessEchequeWallet = () => {
    try {
      console.log("Redirecting to /echeque");
      router.push("/echeque");
      setTimeout(() => {
        if (window.location.pathname !== "/echeque") {
          window.location.href = "/echeque";
        }
      }, 200);
    } catch (err) {
      console.error("router.push error:", err);
      window.location.href = "/echeque";
    }
  };

  return (
    <Template>
      <div className="flex flex-col items-center justify-center px-4 py-6 w-full min-h-[calc(100vh-8rem)]">
        {/* Saudação */}
        <div className="text-center mt-4 w-full max-w-4xl">
          <h2 className="text-lg">Bem-vindo, João</h2>
          <p className="text-3xl font-bold mt-2">R$ 3.250,78</p>
        </div>

        {/* Botões principais */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full max-w-4xl">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow w-full sm:w-auto">
            Movimentações
          </button>
          <button
            onClick={() => router.push("/echeque")}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 w-full sm:w-auto"
          >
            e-Cheque
          </button>
        </div>

        {/* Extrato */}
        <section className="bg-white text-black w-full max-w-4xl rounded-lg shadow mt-8 p-4">
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
      <div className="flex flex-col space-y-3 mt-6 w-full max-w-4xl">
        <button className="bg-blue-700 text-white py-2 rounded-lg shadow w-full">
          Ver Todas Movimentações
        </button>
        <button
          onClick={handleAccessEchequeWallet}
          className="bg-blue-700 text-white py-2 rounded-lg shadow hover:bg-blue-800 w-full"
        >
          Acessar Carteira e-Cheque
        </button>
      </div>
    </div>
    </Template>
  );
}
