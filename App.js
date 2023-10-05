import { StatusBar } from "expo-status-bar";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { styled } from "nativewind";

import { Header } from "./src/components/Header";
import { List } from "./src/components/List";
import { useState } from "react";

const ViewStyled = styled(View);
const TextStyled = styled(Animated.Text);

export default function App() {
  const [fontSize] = useState(new Animated.Value(14));

  const handlePressIn = () => {
    Animated.timing(fontSize, {
      toValue: 20,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(fontSize, {
      toValue: 14,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ViewStyled className={"flex-1 bg-zinc-900"}>
      <Header />
      <TouchableOpacity
        onPressIn={() => handlePressIn(20)}
        onPressOut={() => handlePressOut(14)}
      >
        <TextStyled
          style={{ fontSize }}
          className="flex text-white text-sm font-bold underline items-center text-center justify-between pt-3"
        >
          <Animated.Text style={{ fontSize }}>
            Pressione e segure os textos ou imagens!
          </Animated.Text>
        </TextStyled>
      </TouchableOpacity>
      <List />
      <StatusBar style="auto" />
    </ViewStyled>
  );
}
