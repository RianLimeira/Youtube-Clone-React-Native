import { styled } from "nativewind"
import { Text, View, Image } from "react-native"
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';


const ViewStyled = styled(View)
const TextStyled = styled(Text)
const ImageStyled = styled(Image)

export default Header = () => {
    return (
        <ViewStyled className="flex flex-row items-center justify-between mt-6 py-4 px-3 border-b border-b-white">
            <ViewStyled className="flex flex-row items-center">
                <AntDesign name="youtube" size={36} color="red" />
                <TextStyled className="font-bold text-lg ml-2">
                    Youtube
                </TextStyled>
            </ViewStyled>
            <ViewStyled className="flex flex-row  items-center justify-between border border-gray-400 box-border ">
                <AntDesign name="sharealt" size={24} color="white" style={{ marginHorizontal: 2 }} />
                <AntDesign name="search1" size={24} color="white" style={{ marginHorizontal: 2 }}/>
                <Ionicons name="notifications-circle-outline" size={24} color="white" style={{ marginHorizontal: 8 }} />
                <ImageStyled source={{ uri: 'https://github.com/RianLimeira.png' }} 
                defaultSource={{ uri: 'https://github.com/RianLimeira.png' }} 
                className="w-8 h-8 rounded-full mx-2" />
            </ViewStyled>
        </ViewStyled>
    )
}