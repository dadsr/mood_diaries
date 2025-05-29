import {JSX} from "react";
import DiaryScreen from "@/components/diary";
import {globalStyles} from "@/styles/globalStyles";
import {View, ImageBackground} from "react-native";



export default function firstDiary(): JSX.Element {

    return (
        <ImageBackground
            source={require('../../assets/images/white.jpg')}
            style={globalStyles.background}
            resizeMode="cover"
        >
            <View style={globalStyles.container}>
                <DiaryScreen diary={1} />
            </View>
        </ImageBackground>
    );
}
