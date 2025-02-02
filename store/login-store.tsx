import { action, makeObservable, observable } from 'mobx';
import { Alert } from 'react-native';

class LoginStore {
    email = '';
    password = '';
    constructor() {
        makeObservable(this, {
            email: observable,
            password: observable,
            setEmail: action,
            setPassword: action,
            handleLogin: action,

        });
    }
    setEmail = (email: string) => {
        this.email = email;
    };
    setPassword = (pass: string) => {
        this.password = pass;

    };
    handleLogin = () => {
        if (!this.email || !this.password) {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }
        if (this.email === 'loli@lol.com' && this.password === '123') {
            Alert.alert('Success', 'Login successful!');
        } else {
            Alert.alert('Error', 'Invalid email or password.');
        }
    };

}
const loginStore = new LoginStore();


export default loginStore;
