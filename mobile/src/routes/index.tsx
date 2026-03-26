import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useContext } from "react"

import { AuthContext } from "../contexts/AuthContext"

import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import HomeScreen from "../screens/HomeScreen"

const Stack = createNativeStackNavigator()

export default function Routes() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          // 🔐 ROTAS LOGADAS
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // 🚪 ROTAS PÚBLICAS
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}