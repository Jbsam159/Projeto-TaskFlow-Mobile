import { useContext } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { AuthContext } from "../contexts/AuthContext"

export default function HomeScreen() {

  const {logout} = useContext(AuthContext)

  const handleLogout = async () => {
    
    await logout()

  }

  return (
    <View>
      <Text>Home (Tarefas)</Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>

    </View>
  )
}
