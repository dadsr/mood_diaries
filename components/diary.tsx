import {JSX, useCallback, useState} from "react";
import {Case} from "@/models/Case";
import services from "@/services/Services";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {
    Animated,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    ScrollView as DefaultScrollView,
    ImageBackground
} from "react-native";
import CaseCard from "@/components/caseCard";
import {globalStyles} from "@/styles/globalStyles";

import {useSafeAreaInsets} from "react-native-safe-area-context";

type DiaryProps = {
    diary:number;
};

export default function DiaryScreen({ diary }: DiaryProps): JSX.Element {
    console.log("DiaryScreen ",diary);
    const insets = useSafeAreaInsets();
    const [cases, setCases] = useState<Case[]>([]);

    useFocusEffect (
        useCallback(() => {
            console.log("FirstDiary focused, fetching cases...");
            services.getCases(diary).then((fetchedCases: Case[]) => {
                setCases(fetchedCases)
            })
        },[])
    );

    const addNewCase = () => {
        console.log('add new case');
        router.push({ pathname: '/editCase', params: { diary:diary, id: 0 } });

    };


    return (
        <ImageBackground
            source={require(`../assets/images/white.jpg`)}
            style={globalStyles.background}
            resizeMode="contain"
        >
            <SafeAreaView  style = {[globalStyles.container, {
                paddingTop: Math.max(insets.top + 8,20),
                paddingBottom: Math.max(insets.bottom - 25,20)}]}>

                <Text style = {globalStyles.heading}>רשימת אירועים:</Text>
                <DefaultScrollView  style = {globalStyles.scrollView}>
                    {cases.length > 0 ?(
                        cases.map(c => <CaseCard key={c.id} diary={diary} case={c} />)
                    ): (
                        <View style = {globalStyles.card}>
                            <Text style={globalStyles.text}>לא נמצאו אירועים.</Text>
                            <Text style={globalStyles.text}>לחץ על הוספת אירוע כדי להתחיל.</Text>
                        </View>
                    )}
                </DefaultScrollView >

                <View style={globalStyles.buttonContainer}>
                    <TouchableOpacity style={globalStyles.button} onPress={addNewCase}>
                        <Text style={globalStyles.buttonText} >הוספת אירוע</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView >
        </ImageBackground>
    );

}

