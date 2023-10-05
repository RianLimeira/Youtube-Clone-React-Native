import { styled } from "nativewind";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { DATA } from "../config/server";

const ViewStyled = styled(View);
const TextStyled = styled(Text);
const ImageStyled = styled(Image);

export const List = () => {
    
  return (
    <FlatList
      data={DATA}
      renderItem={({ index, item }) => (
        <ViewStyled className="mt-5">
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}
            onLongPress={() =>
              Alert.alert(
                "Alerta",
                "Você será redirecionado para o github de RianLimeira",
                [
                  {
                    text: "OK",
                    onPress: () =>
                      Linking.openURL("https://github.com/RianLimeira"),
                  },
                  { text: "Cancelar", onPress: () => {}, style: "cancel" },
                ]
              )
            }
          >
            <ImageStyled
              source={{ uri: item.thumbnail }}
              defaultSource={{ uri: item.thumbnail }}
              className={"w-full h-52"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}
            onLongPress={() =>
              Alert.alert(
                "Alerta",
                "Você será redirecionado para o github de RianLimeira",
                [
                  {
                    text: "OK",
                    onPress: () => Linking.openURL(item.url),
                  },
                  { text: "Cancelar", onPress: () => {}, style: "cancel" },
                ]
              )
            }
          >
            <TextStyled className="text-white font-bold pl-1 mt-1">
              {" "}
              {item.title}{" "}
            </TextStyled>
          </TouchableOpacity>
          <ViewStyled
            className="flex flex-row items-center"
            style={{ flexDirection: "row" }}
          >
            <TouchableOpacity
              onPress={() => Linking.openURL(item.url)}
              onLongPress={() =>
                Alert.alert(
                  "Alerta",
                  "Você será redirecionado para o github de RianLimeira",
                  [
                    {
                      text: "OK",
                      onPress: () =>
                        Linking.openURL(item.url),
                    },
                    { text: "Cancelar", onPress: () => {}, style: "cancel" },
                  ]
                )
              }
            >
              <TextStyled numberOfLines={1} className="text-gray-200">
                {" "}
                #suatag{" "}
              </TextStyled>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL(item.url)}
              onLongPress={() =>
                Alert.alert(
                  "Alerta",
                  "Você será redirecionado para o github de RianLimeira",
                  [
                    {
                      text: "OK",
                      onPress: () => Linking.openURL(item.url),
                    },
                    { text: "Cancelar", onPress: () => {}, style: "cancel" },
                  ]
                )
              }
            >
              <TextStyled numberOfLines={1} className="text-gray-200">
                - {item.channel}{" "}
              </TextStyled>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL(item.url)}
              onLongPress={() =>
                Alert.alert(
                  "Alerta",
                  "Você será redirecionado para o github de RianLimeira",
                  [
                    {
                      text: "OK",
                      onPress: () => Linking.openURL(item.url),
                    },
                    { text: "Cancelar", onPress: () => {}, style: "cancel" },
                  ]
                )
              }
            >
              <TextStyled numberOfLines={1} className="text-gray-200">
                - {item.views}{" "}
              </TextStyled>
            </TouchableOpacity>
          </ViewStyled>
        </ViewStyled>
      )}
      keyExtractor={({ id }) => id}
      style={{ marginBottom: 5 }}
    />
  );
};
