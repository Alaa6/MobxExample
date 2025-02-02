import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,  Dimensions } from 'react-native';
import loginStore from '../store/login-store';

const LoginScreen = observer(() => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={loginStore.email}
                onChangeText={loginStore.setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={loginStore.password}
                onChangeText={loginStore.setPassword}
                secureTextEntry
            />

            {/* Login Button */}
            <Button color={'green'} title="Login" onPress={loginStore.handleLogin} />
        </View>
    );
});

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        width : Dimensions.get('screen').width ,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default LoginScreen;
