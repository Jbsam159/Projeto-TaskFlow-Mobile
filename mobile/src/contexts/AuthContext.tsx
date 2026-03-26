import { createContext, useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

type AuthContextType = {
  isAuthenticated: boolean
  login: (token: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorage() {
      const token = await AsyncStorage.getItem("token")

      if (token) {
        setIsAuthenticated(true)
      }

      setLoading(false)
    }

    loadStorage()
  }, [])

  async function login(token: string) {
    await AsyncStorage.setItem("token", token)
    setIsAuthenticated(true)
  }

  async function logout() {
    console.log("LOGOUT CHAMADO")

    await AsyncStorage.removeItem("token")
    await AsyncStorage.removeItem("user")

    const token = await AsyncStorage.getItem("token")
    console.log("TOKEN DEPOIS DO LOGOUT:", token)

    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}