import React, { FC, PropsWithChildren } from "react";
import { Layout } from "../../components/layouts/Layout";
import Image from "next/image";

const NuevaPagina: FC<PropsWithChildren<{}>> = ({ }) => {
  return (
    <>
      <Layout title="Capacítate">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Capacítate con Nosotros
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Aquí aprenderás a utilizar el aplicativo móvil siguiendo nuestro mini taller virtual. Sigue el paso a paso,
                primero reproduce cada video y no olvides subir tus capturas de pantalla para recibir el certificado al finalizar
                el taller.
              </p>
            </div>

            {[
              {
                id: 1,
                title: "Actividad 1: Instalación del Aplicativo",
                steps: [
                  "Paso 1: Descargar el aplicativo desde la tienda.",
                  "Paso 2: Abrir el archivo descargado.",
                  "Paso 3: Seguir las instrucciones de instalación."
                ],
                videoUrl: "/communitySafe/images/SeguridadESPE-03.mp4",
                formLink: "https://example.com/form1",
                bgColor: "bg-gray-100"
              },
              {
                id: 2,
                title: "Actividad 2: Registro y Configuración",
                steps: [
                  "Paso 1: Abrir el aaaaaaaplicativo.",
                  "Paso 2: Completar el formulario de registro.",
                  "Paso 3: Configurar las preferencias iniciales."
                ],
                videoUrl: "/communitySafe/images/SeguridadESPE-03.mp4",
                formLink: "https://example.com/form2",
                bgColor: "bg-gray-200"
              },
              {
                id: 3,
                title: "Actividad 3: Uso Básico del Aplicativo",
                steps: [
                  "Paso 1: Iniciar sesión en el aplicativo.",
                  "Paso 2: Explorar las funcionalidades principales.",
                  "Paso 3: Realizar una tarea básica."
                ],
                videoUrl: "/communitySafe/images/SeguridadESPE-03.mp4",
                formLink: "https://example.com/form3",
                bgColor: "bg-gray-300"
              }
            ].map(section => (
              <div key={section.id} className={`flex flex-wrap m-4 justify-center ${section.bgColor} py-10`}>
                <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                <iframe 
                    className="w-full h-full" 
                    style={{ height: '300px', maxHeight: '100%' }}
                    src={section.videoUrl} 
                    title={`Video de ${section.title}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                  <h2 className="text-2xl font-medium title-font text-gray-900 mb-4">{section.title}</h2>
                  <ul className="list-disc list-inside mb-4">
                    {section.steps.map((step, index) => (
                      <li key={index} className="text-gray-600">{step}</li>
                    ))}
                  </ul>
                  <a href={section.formLink} target="_blank" rel="noopener noreferrer" className="text-indigo-500 inline-flex items-center mt-4">
                    Completar Actividad
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NuevaPagina;
