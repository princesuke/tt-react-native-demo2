import { Children } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SCREENS} from '../../navigation/routes'

export default function DetailScreen({navigation, title}) {

      return <View style={styles.container}>
              <Text>DetailScreen {title}</Text>
              <Button title='ไปหน้าต่อไป' onPress={()=> navigation.navigate(SCREENS.POST_SCREEN, {
                postId: 123,
                postTitle: 'Hello Post !!' 
              })} />
    </View>

    // return <View style={styles.container}>
    //         <View style={{flex:2, backgroundColor:"red", width: 300, justifyContent: 'center', alignItems: 'center'}}>
    //           <Text>DetailScreen1122</Text>
    //           <Button title='ไปหน้าต่อไป' onPress={()=> navigation.navigate("PostScreen")} />
    //         </View>
    //         <View style={{flex:3, backgroundColor: "blue", width:300}}>
    //           <Text>2</Text>
    //         </View>
    // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
})