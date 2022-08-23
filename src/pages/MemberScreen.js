import React, { useState } from 'react';
import { Alert, SafeAreaView, Text } from "react-native";
import Input from '../components/Input/Input';
import Button from "../components/Button/Button";

function MemberScreen({ navigation }) {

    const [userName, setuserName] = useState();
    const [userSurName, setuserSurName] = useState();
    const [userYear, setuserYear] = useState();
    const [userMail, setuserMail] = useState();
    const [userTown, setuserTown] = useState();

    function handleSubmit() {
        if(!userName || !userSurName || !userYear || !userMail || !userTown){
            Alert.alert("Boş yerleri doldurunuz!");
            return;
        }
        let user = {
            userName,
            userSurName,
            userYear,
            userMail,
            userTown
        }
        
        navigation.navigate('MemberResult', { user })
    }

    return (
        <SafeAreaView>
            <Input name="userName" label="Üye Adı" placeholder="Üye adını giriniz..." onChangeText={setuserName} />
            <Input name="userSurName" label="Üye Soyadı" placeholder="Üye soyadını giriniz..." onChangeText={setuserSurName} />
            <Input name="userYear" label="Üye Yaşı" placeholder="Üye yaşını giriniz..." onChangeText={setuserYear} />
            <Input name="userMail" label="Üye E-mail" placeholder="Üye e-mailini giriniz..." onChangeText={setuserMail} />
            <Input name="userTown" label="Üye Memleketi" placeholder="Üye memleketini giriniz..." onChangeText={setuserTown} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberScreen
