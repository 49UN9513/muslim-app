import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"

const Navbar = ({ title }: { title: string }) => {
  return (
    <View>
        <StatusBar/>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {/* Kalau mau bisa tambahin icon/button di kanan sini */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#2D6A4F",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
})

export default Navbar
