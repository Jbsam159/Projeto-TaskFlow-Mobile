import { View, Text, Button } from "react-native"

export default function LoginScreen({ navigation }: any) {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Ir para Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Criar conta" onPress={() => navigation.navigate("Register")} />
    </View>
  )
}