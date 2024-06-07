import { DemoFirst, DemoOne, DemoSecond } from "./demo";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import Demo from "./demo";

export default function TabLayout() {
  const [text, onChangeNumber] = useState("Useless Text");
  console.log("text", text);
  const data = {
    name: "ravi",
    addres: "Hoshiarpur",
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              flexDirection: "row",
              height: 300,
              padding: 20,
              paddingTop: 40,
            }}>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
            <Text>Hello World!</Text>
            <DemoOne />
            <Demo item={data} />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            textContentType={"emailAddress"}
            placeholder="useless placeholder"
            keyboardType="email-address"
          />
          <View
            style={{
              flexDirection: "row",
              height: 300,
              padding: 20,
              paddingTop: 40,
            }}>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
            <Text>Hello World!</Text>
            <DemoOne />
            <Demo item={data} />

            {/* Text Input is starting here  */}
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 300,
              padding: 20,
              paddingTop: 40,
            }}>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
            <Text>Hello World!</Text>
            <DemoOne />
            <Demo item={data} />

            {/* Text Input is starting here  */}
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 300,
              padding: 20,
              paddingTop: 40,
            }}>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
            <Text>Hello World!</Text>
            <DemoOne />
            <Demo item={data} />

            {/* Text Input is starting here  */}
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 300,
              padding: 20,
              paddingTop: 40,
            }}>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
            <Text>Hello World!</Text>
            <DemoOne />
            <Demo item={data} />

            {/* Text Input is starting here  */}
          </View>
          <Image source={require("@/assets/images/favicon.png")} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  scrollView: {
    backgroundColor: "cyan",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
