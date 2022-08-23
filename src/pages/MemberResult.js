import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button/Button";

function MemberResult({ route, navigation }) {

    let user = route.params.user;


    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>KEBAP FITNESS</Text>

            <View style={styles.user_container} >
                <Text style={styles.text}>AD : {user.userName}</Text>
                <Text style={styles.text}>SOYAD : {user.userSurName}</Text>
                <Text style={styles.text}>YAŞI : {user.userYear}</Text>
                <Text style={styles.text}>E-MAİL : {user.userMail}</Text>
                <Text style={styles.text}>MEMLEKETİ : {user.userTown}</Text>
            </View>

            <Button text="Anasayfa Dön" onPress={() => navigation.navigate('WelcomeScreen')} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        flex: 1
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#277BC0"
    },
    user_container: {
        margin: 10,
        padding: 20,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: "white"
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black"
    }
})

export default MemberResult;