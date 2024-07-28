import React, { FC, PropsWithChildren } from "react";
import { Layout } from "../../components/layouts/Layout";
import { EnvelopeIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { text } from "stream/consumers";

const EquipoPage: FC<PropsWithChildren<{}>> = ({ }) => {
  return (
    <>
      <Layout title="Nuestro Equipo">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Miembros de nuestro equipo
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ textAlign: "justify" }}>
                La Universidad de las Fuerzas Armadas ESPE es una institución
                académica reconocida por su excelencia en la formación de
                profesionales altamente capacitados en diversas áreas del
                conocimiento. Su compromiso con la calidad educativa, su
                amplia trayectoria y su vinculación con las Fuerzas Armadas la
                convierten en una institución destacada en el ámbito
                educativo. Como estudiantes de la carrera de Ingeniera de
                Tecnologías de la Información, nos enorgullece apoyar a
                iniciativas como esta que buscan mejorar el bienestar de las
                comunidades. Hemos trabajado arduamente para desarrollar una
                aplicación efectiva que contribuya a la seguridad y protección
                de los habitantes. ¡Estamos comprometidos en crear un entorno
                seguro y brindar soluciones innovadoras para enfrentar los
                desafíos de seguridad en la provincia!
              </p>
            </div>
            <div className="flex flex-wrap m-2 justify-center">
            

              <h3 className="w-full text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500 ">Docentes</h3>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695635408/LuisCastillo_hg2kj1.png" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Luis Castillo</h2>
                    <p className="text-gray-500">Director de Proyecto</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695635408/VeronicaMartinez_jvqovf.png" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Verónica Martinez</h2>
                    <p className="text-gray-500">Docente de apoyo</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695635407/Edwin_Camino_xfm0xx.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Edwin Camino</h2>
                    <p className="text-gray-500">Docente de apoyo</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/di090ggjn/image/upload/v1722175666/unfleyel4ahsitcxza5n.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Atal Kumar</h2>
                    <p className="text-gray-500">Docente de apoyo</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-10"></div>
              <h3 className="w-full text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">Fase I</h3>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/ddodvvqcq/image/upload/v1696447805/images/MariaParraga.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">María Párraga</h2>
                    <p className="text-gray-500">Tesista</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/ddodvvqcq/image/upload/v1696447805/images/VinicioBorja.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Vinicio Borja</h2>
                    <p className="text-gray-500">Tesista</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-10"></div>
              <h4 className=" w-full text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">Estudiantes Desarrolladores WEB de Vinculación Fase II</h4>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695633551/VergaraDayana_gpnb2j.png" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Dayana Vergara</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695633551/Bryan_Cruz_mijxrp.png" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Bryan Cruz</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695633551/Stefy_Erazo_pset76.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Stefany Erazo</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695633551/StefyHernandez_aqpquo.png" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Stefanny Hernandez</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dmkvix7ds/image/upload/v1695633551/Kevin_Azua_oqurju.png" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Kevin Azua</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-10"></div>
              <h3 className="w-full text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">Estudiantes Desarrolladores Móvil de Vinculación Fase II</h3>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/ddodvvqcq/image/upload/v1696952233/images/MateoBeltran.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Mateo Beltrán</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/ddodvvqcq/image/upload/v1696952233/images/JosueChica.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Jhosue Chica</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/ddodvvqcq/image/upload/v1696952233/images/JairSanchez.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Jaír Sanchez</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/ddodvvqcq/image/upload/v1696952233/images/SteveenRiofrio.jpg" />
                  <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Steeven Riofrío</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/ddodvvqcq/image/upload/v1696952233/images/LaylinBohorquez.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Laylin Bohorquez</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-10"></div>
              <h3 className="w-full text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">Estudiantes Desarrolladores WEB de Vinculación Fase III</h3>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ejemplo.com/estudiante-web-1.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Estudiante Web 1</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ejemplo.com/estudiante-web-2.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Estudiante Web 2</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-10"></div>
              <h3 className="w-full text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">Estudiantes Desarrolladores Móvil de Vinculación Fase III</h3>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ejemplo.com/estudiante-movil-1.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Estudiante Móvil 1</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ejemplo.com/estudiante-movil-2.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Estudiante Móvil 2</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ejemplo.com/estudiante-movil-3.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Estudiante Móvil 3</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ejemplo.com/estudiante-movil-4.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Estudiante Móvil 4</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ejemplo.com/estudiante-movil-5.jpg" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Estudiante Móvil 5</h2>
                    <p className="text-gray-500">Estudiante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EquipoPage;
