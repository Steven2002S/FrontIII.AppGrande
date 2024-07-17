import Image from "next/image";
import React, {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties
} from "react";
import {
  DocumentCheckIcon,
  UsersIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,

  NewspaperIcon,
  UserGroupIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";

function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateIn: FC<PropsWithChildren<{ from: CSSProperties; to: CSSProperties, time: Number }>> = ({ from, to, time, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: `${time}ms ease-in-out`
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
            ...defaultStyles,
            ...to
          }
          : {
            ...defaultStyles,
            ...from
          }
      }
    >
      {children}
    </div>
  );
};

const FadeIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    time={1500}>
    {children}
  </AnimateIn>
);

const FadeUp: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    time={1500}
  >
    {children}
  </AnimateIn>
);

const ScaleIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }} time={100}>
    {children}
  </AnimateIn>
);

const MoveIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateY(300px)" }}
    to={{ transform: "translateY(0px)" }}
    time={1000}>
    {children}
  </AnimateIn>
);

const MoveRight: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateX(300px)" }}
    to={{ transform: "translateX(0px)" }}
    time={1000}>
    {children}
  </AnimateIn>
);

const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  MoveIn,
  MoveRight
};

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <section  className="relative w-full  bg-color-lila flex justify-center overflow-hidden py-5 lg:pt-20 lg:pb-2">
          <Animate.FadeIn>
            <div className="bubbles-box fade-in absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <div className="inner">
                {/* <img src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716307806/Img_CommunitySafe/Logo_sinFondo_bllni6.png" alt="Shield 1" className="bubble-1" />
                <img src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716307806/Img_CommunitySafe/Logo_sinFondo_bllni6.png" alt="Shield 2" className="bubble-sm-1" />
                <img src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716307806/Img_CommunitySafe/Logo_sinFondo_bllni6.png" alt="Shield 3" className="bubble-2" />
                <img src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716307806/Img_CommunitySafe/Logo_sinFondo_bllni6.png" alt="Shield 4" className="bubble-sm-2" />
                <img src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716307806/Img_CommunitySafe/Logo_sinFondo_bllni6.png" alt="Shield 5" className="bubble-3" />
                <img src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716307806/Img_CommunitySafe/Logo_sinFondo_bllni6.png" alt="Shield 6" className="bubble-sm-3" /> */}
              </div>
            </div>
          </Animate.FadeIn>
          <div className="flex h-full w-full relative items-center flex-col">
            <div className="container lg:px-16">
              <div className="flex flex-col items-center">
                <div className="w-full px-5 h-full">
                  <Animate.FadeUp>
                    <div className="bg-color-espe bg-opacity-75 rounded-lg p-6 w-full text-center shadow-lg fade-in">
                      <h1 className="title mb-4 text-3xl font-bold text-white">
                        Community Safe
                      </h1>
                      <p className="leading-relaxed mb-6 text-white" style={{ textAlign: "justify" }}>
                        Aplicación Web y Móvil para la comunidad donde las personas se protegen mutuamente, se apoyan y se preocupan por el bienestar de todos.
                        Únete a nuestra aplicación y forma parte de Community Safe. Juntos, construyamos una comunidad más segura.
                      </p>
                    </div>
                  </Animate.FadeUp>
                </div>
                <div className="w-full h-full overflow-hidden mt-8">
                  <Animate.MoveIn>
                    <div className="flex  h-full justify-center">
                      <Image src="https://res.cloudinary.com/dfitq38dk/image/upload/v1717640119/Img_CommunitySafe/Smartphone_Sale_Instagram_Story_qqzk47.png" width={400} height={400} className="object-contain move-in" alt="logo" />
                    </div>
                  </Animate.MoveIn>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="bg-color-secundario pt-16 text-white">
          <div className="flex flex-col w-full overflow-hidden">
            <Animate.FadeIn>
              <div className="text-center mb-12">
                <h1 className="text-center title">Community Safe  <br /></h1> <h1 className="text-2xl">Por comunidades seguras</h1>
              </div>
              <div className="px-10 lg:px-32 flex justify-center mb-12">
                <video controls className="w-full" style={{ maxWidth: "820px", height: "auto" }}>
                  <source src="https://res.cloudinary.com/dfitq38dk/video/upload/v1717640896/Img_CommunitySafe/COMMUNITY_SAFE_wedrlf.mp4"
                    type="video/mp4" />
                  Tu navegador no admite el elemento de video.
                </video>
              </div>
            </Animate.FadeIn>
            <Animate.FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-center title mb-2">Empieza ya!</h1>
                <span className="text-center">Solo necesitas descargar la aplicación</span>
              </div>
            </Animate.FadeIn>

            <Animate.MoveIn>
              <div className="w-full flex flex-col justify-center gap-y-10 lg:gap-y-0 items-center lg:flex-row">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
                  <Image width={550} height={500} src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716313392/Img_CommunitySafe/celularSolo_qktfp3.png" className="move-in" alt="phone3" />
                </div>
                <div className="w-full lg:w-1/2 h-full flex items-center lg:items-end pb-16 overflow-hidden">
                  <div className="text-start px-10 lg:px-0 h-full w-full move-in">
                    <h1 className="title mb-10 ">¿Cómo funciona?</h1>
                    <ul>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-black font-bold text-2xl">1</span>
                        <span className="text-2xl">Descarga la aplicación Community Safe</span>
                      </li>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-black font-bold text-2xl">2</span>
                        <span className="text-2xl">Realiza un reporte y publícalo</span>
                      </li>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-black font-bold text-2xl">3</span>
                        <span className="text-2xl">Revisa el reporte publicado en noticias</span>
                      </li>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-black font-bold text-2xl">4</span>
                        <span className="text-2xl">Crea grupos personalizados</span>
                      </li>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-black font-bold text-2xl">5</span>
                        <span className="text-2xl">Genera alertas a tus contactos de Confianza</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Animate.MoveIn>
          </div>
        </section>

        <section className="w-full">
          <div className="container lg:py-12 md:py-8 py-4 px-10 lg:px-19 text-center">
            <Animate.FadeIn>
              <div className="lg:mb-8">
                <h1 className="mb-6 md:mb-6 lg:mb-16 title">
                  Características de la aplicación móvil
                </h1>
                <div className="w-full flex flex-col gap-x-0 lg:flex-row lg:gap-x-10 gap-y-5">
                  <div className="flex flex-col w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716313915/Img_CommunitySafe/ReportesLogo_ih84e8.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Facilita la realización de reportes en tiempo real, adjuntando descripción, foto y ubicación del suceso.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716314117/Img_CommunitySafe/sos_gnfxvv.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Incorpora un botón de enviar ayuda "Send Out Soccour" (SOS) en la interfaz principal.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716314160/Img_CommunitySafe/logo_noticias_fsevwu.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Ofrece una sección de noticias que muestra las diferentes emergencias que ocurren a diario.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="https://res.cloudinary.com/dfitq38dk/image/upload/v1716314275/Img_CommunitySafe/logo_grupos_kwikbx.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Permite crear grupos personalizados para comunicarse mediante mensajes de texto.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Animate.FadeIn>
            {/* <Animate.FadeIn>
              <br />
              <div>
                <h1 className="title mb-6 md:mb-6 lg:mb-8 ">
                  Impactos esperados de la aplicación
                </h1>
                <div className="w-full flex flex-col gap-x-0 lg:flex-row lg:gap-x-10 gap-y-5">
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="60" height="60" src="/communitySafe/images/comunidad.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Mantener a la comunidad informada a diario de los diferentes tipos de emergencias que ocurren regularmente.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="/communitySafe/images/estadisticas.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Enviar a la comunidad reportes estadísticos de seguridad relevantes, que incluyen información sobre las emergencias más frecuentes y sectores con mayor incidencias.                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="60" height="60" src="/communitySafe/images/smsimpacto.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Facilitar la comunicación entre los miembros de la comunidad a través de un sistema de mensajería.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="60" height="60" src="/communitySafe/images/alarma.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Proporcionar notificaciones instantáneas al activar el SOS, asegurando una respuesta rápida y eficaz.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Animate.FadeIn> */}
          </div>
        </section>



        <section className="w-full">
          <Animate.FadeIn>
            <h1 className="title mb-5 text-center md:mb-10 ml-10">
              ¿De dónde nace?
            </h1>
          </Animate.FadeIn>
          <div className="flex flex-wrap mt-5 ml-2 mr-2 text-center md:ml-5 md:mr-5 text-justify">
            <div className="w-full md:w-1/2 lg:w-1/2 p-2 md:p-4">
              {/* <p>
                En la Universidad de las Fuerzas Armadas ESPE Sede Santo Domingo, un grupo de docentes y los tesistas Vinicio Borja y Maria José Párraga expresaron su preocupación por la seguridad de la comunidad de Luz de América. Después de llevar a cabo encuestas en dicha comunidad con el objetivo de identificar sus necesidades técnicas, tomaron la decisión de desarrollar una aplicación denominada "Seguridad ESPE". Esta aplicación tiene como finalidad permitir a los usuarios reportar incidentes de seguridad en tiempo real a través de una plataforma web y una aplicación móvil.</p>
             */}
              <p>
                A inicios del mes de marzo del 2023, en la Universidad de las Fuerzas Armadas ESPE, Sede Santo Domingo de
                los Tsáchilas, se da inicio a la Fase I del proyecto de vinculación  titulado "IMPLEMENTACIÓN DE
                APLICACIONES WEB Y MÓVILES PARA LA GESTIÓN DE EMERGENCIAS COMUNITARIAS EN LA PROVINCIA DE SANTO DOMINGO DE
                LOS TSÁCHILAS", donde un grupo de docentes en un trabajo colaborativo con estudiantes de la carrera de
                Ingeniería en Tecnologías de la Información, se inició en la comunidad de la parroquia de Luz de América.
                Para atender esta necesidad, se llevaron a cabo encuestas como parte de un muestreo con el fin de
                identificar los incidentes más comunes. Estas encuestas revelaron diversas problemáticas de seguridad,
                incluyendo robos, vandalismo, desorden público y emergencias médicas, entre otras.
                <br />
                Con los datos recopilados en la Fase I, en el mes de mayo dos estudiantes de la carrera
                desarrollaron el proyecto de Unidad de Integración Curricular denominado "Desarrollo de una aplicación
                web y móvil para la gestión de alertas de emergencia comunitaria bajo el enfoque de metodologías ágiles",
                la misma sirvió como punto de partida para el desarrollo de la aplicación "Seguridad ESPE". La
                información recopilada se empleó para diseñar funciones y servicios específicos en la aplicación.

              </p>

            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-2 md:p-4">

              {/* <p>
                Con el tiempo, Seguridad ESPE se ha convertido en una herramienta esencial para mejorar la seguridad y fortalecer la comunidad. Basándose en las aplicaciones desarrolladas por los tesistas, se llevó a cabo la Fase II del proyecto de Vinculación con la Sociedad, denominado "IMPLEMENTACIÓN DE APLICACIONES WEB Y MÓVILES PARA LA GESTIÓN DE EMERGENCIAS COMUNITARIAS EN LA PROVINCIA DE SANTO DOMINGO DE LOS TSÁCHILAS". En esta ocasión, el enfoque se dirigió hacia las Unidades Educativas de las parroquias Puerto Limón y El Esfuerzo.</p>
            */}

              <p>
                La principal meta de esta aplicación fue fortalecer la seguridad de la comunidad, fomentando la comunicación,
                coordinación y respuesta ante situaciones de emergencia, y aprovechando el uso de dispositivos móviles e internet.
                La aplicación ofrece una solución innovadora en el ámbito de la protección ciudadana.
                <br />
                Basándonos en las aplicaciones desarrolladas anteriormente, a inicios de septiembre del 2023 inició la Fase
                II del Proyecto de Vinculación con la Sociedad, en esta fase, un grupo de diez estudiantes y tres docentes
                de la UFA - ESPE Sede Santo Domingo de los Tsáchilas, recolectó datos mediante encuestas realizadas en
                Unidades Educativas de la parroquia Puerto Limón y El Esfuerzo, estos datos se utilizaron como base para
                desarrollar la aplicación <strong>"Schoolar Security”</strong>.
                <br />
                El propósito principal de esta aplicación es administrar y gestionar incidentes en las unidades
                educativas, comenzando con las parroquias asignadas. Estas aplicaciones proveen información en tiempo real
                sobre los incidentes, a las autoridades de dichas instituciones, además de generar estadísticas que
                facilitan la toma de decisiones futuras para mejorar la calidad de vida, comunicación, seguridad de
                todos los integrantes de la comunidad.

              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-2 md:p-4">
              <img
                src="https://res.cloudinary.com/dfitq38dk/image/upload/v1698103740/integrantesFase1.webp"
                width={500}
                height={500}
                alt="Primera foto"
                className="mx-auto rounded" ></img>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-2 md:p-4">
              <img
                src="https://res.cloudinary.com/dfitq38dk/image/upload/c_fill,h_1105/v1699587287/fotoFase_II.jpg"
                width={500}
                height={500}
                alt="Segunda foto"
                className="mx-auto rounded" ></img>
            </div>

          </div>
        </section>
      </div >
    </>
  );
};

export default HomePage;
