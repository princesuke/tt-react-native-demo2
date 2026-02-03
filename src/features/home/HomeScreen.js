import {View, Text, StyleSheet, Button} from 'react-native'
import {useAuth} from "../../hooks/useAuth";
import { useSelector } from 'react-redux';

export default function HomeScreen() {
    const {logout} = useAuth();
    const {createdAt, userToken} = useSelector((state) => state.auth);

    const handleLogout = ()=> {
      console.log("ออกจากระบบ")
      // setUserToken(null)
      logout();
    }

    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>{createdAt}</Text>
        <Text>{userToken}</Text>
        <Button title='ออกจากระบบ' onPress={handleLogout} />
    </View>   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
})