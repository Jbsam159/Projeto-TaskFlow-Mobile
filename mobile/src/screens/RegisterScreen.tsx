import { View, Text, Button } from "react-native"

export default function RegisterScreen({ navigation }: any) {
  return (
    <View>
      <Text>Cadastro</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}