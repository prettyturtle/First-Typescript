import { StyleSheet, View } from "react-native"
import { Typography } from "./src/components/Typography"
import React from "react"

export default function App() {
  return (
    <View style={styles.container}>
      <Typography
        color="red"
        fontSize={16}
      >
        Hello
      </Typography>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
