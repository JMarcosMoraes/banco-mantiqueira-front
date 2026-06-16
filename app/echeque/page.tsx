"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../assets/Logo_marca.png";
import "../login/Login.css";
import Template from "../components/Template";

export default function Echeque() {
  const router = useRouter();

  return (
    <Template>
      <div className="flex flex-col items-center justify-center px-4 py-6 w-full min-h-[calc(100vh-8rem)]">
        {/* Título da página */}
        <div className="text-center mt-4 w-full max-w-4xl">
          <h2 className="text-3xl font-bold">Carteira e-Cheque</h2>
          <p className="text-lg mt-2">Gerencie seus e-cheques</p>
        </div>

        {/* Lista de e-cheques */}
        <section className="bg-white text-black w-full max-w-4xl rounded-lg shadow mt-8 p-4">
        <h3 className="text-lg font-semibold mb-4">e-Cheques Emitidos</h3>
        <ul className="space-y-3">
          <li className="flex justify-between border-b pb-3">
            <div>
              <p className="font-semibold">e-Cheque #001</p>
              <p className="text-sm text-gray-600">Beneficiário: Empresa XYZ</p>
            </div>
            <span className="text-red-600 font-bold">-R$ 500,00</span>
          </li>
          <li className="flex justify-between border-b pb-3">
            <div>
              <p className="font-semibold">e-Cheque #002</p>
              <p className="text-sm text-gray-600">Beneficiário: Serviços ABC</p>
            </div>
            <span className="text-red-600 font-bold">-R$ 1.200,00</span>
          </li>
          <li className="flex justify-between">
            <div>
              <p className="font-semibold">e-Cheque #003</p>
              <p className="text-sm text-gray-600">Beneficiário: Consultoria DEF</p>
            </div>
            <span className="text-red-600 font-bold">-R$ 750,00</span>
          </li>
        </ul>
      </section>

      {/* e-Cheques Recebidos */}
      <section className="bg-white text-black w-11/12 md:w-2/3 rounded-lg shadow mt-6 p-4">
        <h3 className="text-lg font-semibold mb-4">e-Cheques Recebidos</h3>
        <ul className="space-y-3">
          <li className="flex justify-between border-b pb-3">
            <div>
              <p className="font-semibold">e-Cheque #A001</p>
              <p className="text-sm text-gray-600">Emitente: Pessoa Física</p>
            </div>
            <span className="text-green-600 font-bold">+R$ 1.000,00</span>
          </li>
          <li className="flex justify-between">
            <div>
              <p className="font-semibold">e-Cheque #B002</p>
              <p className="text-sm text-gray-600">Emitente: Empresa GHI</p>
            </div>
            <span className="text-green-600 font-bold">+R$ 2.500,00</span>
          </li>
        </ul>
      </section>

      {/* Botões inferiores */}
      <div className="flex flex-col space-y-3 mt-6 w-full max-w-4xl mb-8">
        <button className="bg-blue-700 text-white py-2 rounded-lg shadow hover:bg-blue-800 w-full">
          Emitir Novo e-Cheque
        </button>
        <button
          onClick={() => router.back()}
          className="bg-gray-600 text-white py-2 rounded-lg shadow hover:bg-gray-700 w-full"
        >
          Voltar
        </button>
      </div>
    </div>
    </Template>
  );
}
