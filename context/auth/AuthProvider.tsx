/* eslint-disable react/jsx-filename-extension */
import { IUser } from "@/interfaces/user";
import React, { useReducer, useEffect } from "react";
import { authReducer } from "./AuthReducer";
import tesloApi from "@/api/tesloApi";
import Cookies from "js-cookie";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/router";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

interface Props {
  children: React.ReactNode;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

const baseUrl = "http://localhost:3001/api";

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/login/renew`, {
        headers: {
          "x-token": Cookies.get("token"),
        },
      });
      const { token, usuario } = data;
      console.log(token, usuario);
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: usuario });
    } catch (error) {
      Cookies.remove("token");
    }
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      console.log(email, password);
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      const { token, usuario } = response.data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: usuario });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await tesloApi.post("/user/register", {
        name,
        email,
        password,
      });
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message,
        };
      }
      return {
        hasError: true,
        message: "No se pudo crear el usuario - intente de nuevo",
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
