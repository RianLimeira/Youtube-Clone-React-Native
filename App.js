import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styled } from "nativewind";

import { Header } from "./src/components/Header";
import { List } from "./src/components/List";

const ViewStyled = styled(View);

export default function App() {
  return (
    <ViewStyled className={"flex-1 bg-zinc-900"}>
      <Header />
      <List />
      <StatusBar style="auto" />
    </ViewStyled>
  );
}
