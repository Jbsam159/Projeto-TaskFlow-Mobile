import Routes from "./src/routes"

import { AuthProvider } from "./src/contexts/AuthContext"

import { StyleSheet, View, Text } from "react-native"

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
