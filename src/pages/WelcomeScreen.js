import React from "react";
import {  SafeAreaView, StyleSheet, Text } from "react-native";
import Button from "../components/Button/Button";

function WelcomeScreen(props) {

    function goToMember(){
        props.navigation.navigate('MemberScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>WelcomeSreen</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMember} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    header:{
        fontSize:30,
        fontWeight:"bold",
        color:"black",
        textAlign:"center",
        margin:10
    }
})
export default WelcomeScreen;