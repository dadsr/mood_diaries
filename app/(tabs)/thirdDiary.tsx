import {JSX} from "react";
import DiaryScreen from "@/components/diary";
import {globalStyles} from "@/styles/globalStyles";
import {ImageBackground, View} from "react-native";


export default function thirdDiary(): JSX.Element {



    return (
        <ImageBackground
            source={require('../../assets/images/white.jpg')}
            style={globalStyles.background}
            resizeMode="cover"
        >
            <View style={globalStyles.container}>
                <DiaryScreen diary={3} />
            </View>
        </ImageBackground>
    );
}
