/* eslint-disable react/jsx-filename-extension */

import React, { useContext, useState, useEffect } from "react";
import { Layout } from "../../components/layouts/Layout";
import { useForm } from "../../hooks/useForm";
import { GetServerSideProps } from 'next'

import { AuthLayout } from "@/components/layouts/AuthLayout";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { signIn, getSession, getProviders } from "next-auth/react";

import { AuthContext } from "@/context/auth";
interface FormValues {
  email: string;
  password: string;
}
function AuthP() {
  const router = useRouter();
  const { user} = useContext(AuthContext);

  const { handleChange, formulario } = useForm<FormValues>({
    email: "",
    password: "",
  });

  const [showError, setShowError] = useState(false);

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // setShowError(false);
    await signIn("credentials", {
      email: formulario.email,
      password: formulario.password,
    });

    
    // const isValidLogin = await loginUser(formulario.email, formulario.password);

    // if (!isValidLogin) {
    //   setShowError(true);
    //   setTimeout(() => setShowError(false), 3000);
    //   return;
    // }
  };

  useEffect(() => {
    if (user?.uid) {
      router.replace("/reports");
    }
  }, [user]);

  return (
    <Layout title="Auth">
      <AuthLayout title="Ingresar">
        <div className="mt-8">
          <div className="mt-6">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={onSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-600"
                >
                  {" "}
                  Dirección de correo electrónico{" "}
                </label>
                <div className="mt-1">
                  <input
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Tu correo electrónico"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-600"
                >
                  {" "}
                  Contraseña{" "}
                </label>
                <div className="mt-1">
                  <input
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Tu contraseña"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    placeholder="Tu contraseña"
                    className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-neutral-600"
                  >
                    {" "}
                    Recordarme{" "}
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    {" "}
                    ¿Olvidaste tu contraseña?{" "}
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });
  // console.log({session});

  const { p = "/" } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AuthP;
