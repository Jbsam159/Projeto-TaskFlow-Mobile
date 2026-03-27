import { useContext, useEffect, useState } from "react"
import { View, Text, TouchableOpacity, FlatList, TextInput } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { AuthContext } from "../contexts/AuthContext"
import { getTasks, createTask } from "../services/api"

export default function HomeScreen() {
  const { logout } = useContext(AuthContext)

  const [tasks, setTasks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [newTask, setNewTask] = useState("")
  const [priority, setPriority] = useState("")
  const [creating, setCreating] = useState(false)

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

  const handleCreateTask = async () => {
    if (!newTask.trim() || !priority.trim()) {
      return
    } // ❌ não aceita vazio

    try {
      setCreating(true)

      const token = await AsyncStorage.getItem("token")
      if (!token) return

      const createdTask = await createTask(token, newTask, priority)

      // 🔥 Atualiza lista na hora (UX boa)
      setTasks((prev) => [createdTask, ...prev])

      // 🔥 limpa input
      setNewTask("")
      setPriority("")

    } catch (err) {
      console.log("Erro ao criar tarefa:", err)
    } finally {
      setCreating(false)
    }
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

      <TextInput
        placeholder="Nova tarefa"
        value={newTask}
        onChangeText={setNewTask}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <TextInput
        placeholder="Prioridade (low, medium, high)"
        value={priority}
        onChangeText={setPriority}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <TouchableOpacity onPress={handleCreateTask}>
        <Text>Criar</Text>
      </TouchableOpacity>

    </View>
  )
}