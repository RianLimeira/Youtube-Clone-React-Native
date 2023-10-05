import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";

import { DATA } from "../config/server";

const ViewStyled = styled(View);
const TextStyled = styled(Text);
const ImageStyled = styled(Image);

export const List = () => {
  console.log(DATA);
  return (
    <FlatList
      data={DATA}
      renderItem={({ index, item }) => (
        <ViewStyled className="mt-5">
          <ImageStyled
            source={{ uri: item.thumbnail }}
            defaultSource={{ uri: item.thumbnail }}
            className={"w-full h-52"}
          />
          <TextStyled className="text-white font-bold pl-1 mt-1">
            {" "}
            {item.title}{" "}
          </TextStyled>
          <ViewStyled className="flex flex-row items-center">
            <TextStyled className="text-gray-200"> #suatag </TextStyled>
            <TextStyled className="text-gray-200">- {item.channel} </TextStyled>
            <TextStyled className="text-gray-200">- {item.views} </TextStyled>
          </ViewStyled>
        </ViewStyled>
      )}
      keyExtractor={({ id }) => id}
      style={{ marginBottom: 5 }}
    />
  );
};
