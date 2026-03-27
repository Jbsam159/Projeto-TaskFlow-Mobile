const API_URL = "http://192.168.15.9:3000"

import AsyncStorage from "@react-native-async-storage/async-storage"

export async function loginRequest(email: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    console.log("STATUS:", response.status)

    const data = await response.json()

    console.log("RESPONSE DATA:", data)

    if (!response.ok) {
      throw new Error(data.error || "Erro ao fazer login")
    }

    return data
  } catch (error) {
    console.log("FETCH ERROR:", error)
    throw error
  }
}


export async function logoutRequest() {
  await AsyncStorage.removeItem("token")
  await AsyncStorage.removeItem("user")
}

export async function getTasks(token: string) {
  const response = await fetch(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "Erro ao buscar tarefas")
  }

  return data
}

