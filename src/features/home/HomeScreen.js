import {View, Text, StyleSheet, Button} from 'react-native'

export default function HomeScreen({setUserToken}) {

    const handleLogout = ()=> {
      console.log("ออกจากระบบ")
      setUserToken(null)
    }

    return <View style={styles.container}>
        <Text>Home Screen</Text>
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