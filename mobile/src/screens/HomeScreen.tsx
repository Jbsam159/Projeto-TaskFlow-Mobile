import { useContext, useEffect, useState } from "react"
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { AuthContext } from "../contexts/AuthContext"
import { getTasks } from "../services/api"

export default function HomeScreen() {
  const { logout } = useContext(AuthContext)

  const [tasks, setTasks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTasks() {
      try {
        const token = await AsyncStorage.getItem("token")

        if (!token) return

        const data = await getTasks(token)

        setTasks(data)
      } catch (err) {
        console.log("Erro ao buscar tarefas:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  const handleLogout = async () => {
    await logout()
  }

  // 🔄 loading
  if (loading) {
    return <Text>Carregando...</Text>
  }

  // 📭 lista vazia
  if (tasks.length === 0) {
    return (
      <View>
        <Text>Nenhuma tarefa encontrada</Text>

        <TouchableOpacity onPress={handleLogout}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // 📋 lista com dados
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}