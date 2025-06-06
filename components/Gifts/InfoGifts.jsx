'use client'

import { useRouter } from "next/navigation"

export default function InfoGifts() {
    const router = useRouter();

    return (
      <main className="min-h-screen m-0 overflow-x-hidden bg-primary">
        <div className="container text-center mx-auto py-10">
          <div className=" bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Datos Bancarios</h2>
            <ul className="list-none space-y-2">
              <li><strong>Nombre del titular:</strong> Pepe Argento</li>
              <li><strong>Cuil:</strong> 4545645645</li>
              <li><strong>N° de cuenta:</strong> CA $ 4564564564</li>
              <li><strong>Alias:</strong> pepeargento</li>
              <li><strong>CBU:</strong> 4545645645645</li>
            </ul>
          </div>
          <div>
            <button
             className=" bg-secondary text-primary font-bold py-2  w-1/6  rounded-lg shadow-lg mt-4"
              onClick={() => router.push("/#gifts")}
            > 
              Volver
            </button>
          </div>
        </div>
      </main>
    );
}