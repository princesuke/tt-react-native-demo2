import {View, Text, StyleSheet} from 'react-native'

export default function HomeScreen() {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
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