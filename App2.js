import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, useWindowDimensions, 
  codegenNativeComponent, Image } from 'react-native';
import {theme} from './src/theme';
import { MyButton } from './src/components/MyButton';
import HomeCard from './src/components/HomeCard';
import axios from 'axios';
import PostScreen from './src/features/post/PostScreen';
import AppNavigator from './src/navigation/AppNavigator';
import HomeNavigator from './src/features/home/HomeNavigator'
import Demo1Screen from './src/features/demo/Demo1Screen';

export default function App() {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [city, setCity] = useState(null);
  const [data, setData] = useState(null);

  async function fetchUser() {
    try  {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
      const data = await response.json();
      // console.log(data);
      setData(data);
    } catch(error) {
      console.log("Error:", error);
    }
  }

  const fetchData1 = async ()=> {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/3')
    setData(res.data);

    //get 
    //post
    //put
    //delete
    //patch
  }

  useEffect(()=> {
    console.log("เข้าครั้งแรก")
    // fetchUser();
    fetchData1();

    // console.log("เข้าครั้งแรก")
    // const timer = setInterval(() => console.log('Tick'), 1000);

    // return ()=> {
    //   clearInterval(timer);
    //   console.log('หยุดนับ')
    // }

  },[])

  useEffect(()=> {
    
    // if (!city) {
    //   alert('Hey have city data', city);
    // }
    // console.log(data)
    if(data) {
      // console.log(data?.address.city)
      setCity(data?.address.city)
    }
  },[data])

  // useEffect(()=>{
  //   if(count1 > 10) {
  //     renderA()
  //   }
  // },[count1, count2]);

  // useEffect(()=>{
  //   renderB();
  // },[count2]);


  const renderA=()=> {
    console.log('renderA')
  }

  const renderB=()=> {
    console.log('renderB')
  }
  
// return <HomeNavigator />

  // return <Demo1Screen />

  return <AppNavigator />

  // return  <PostScreen />

  return (
    <View style={[styles.container, 
      {flexDirection: isLandscape ? "row" : "column" }]}>
        <Text>{city}</Text>
        <Text>count1 = {count1}</Text>
        <Text>count2 = {count2}</Text>
      
       <Button title="ปุ่ม1" onPress={()=> { setCount1(count1+1) }} />
       <Button title="ปุ่ม2" onPress={()=>  { setCount2(count2+1) }}/>
        <Button title="เปลี่ยน City" onPress={()=>  { setCity(city + '++') }}/>



       {!isLandscape && <Text>เมนู</Text>}
      
      <View>
        <Text>width = {width}</Text>
        <Text>height = {height}</Text>
        <Text>isLandscape = {isLandscape ? "true" : "false"}</Text>
        <View style={{height: 20}}></View>
        <Image 
          source={ require('./assets/icon.png')} 
          style={styles.image} />
      </View>

      <View>
        <Image 
          source={{uri: "https://picsum.photos/100"}} 
          style={styles.image} />
        <Text>Open up App.js to start working on your app!</Text>
      </View>

      {isLandscape && <Text>เมนู</Text>}
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  container2: {    
    backgroundColor: theme.colors.background,
    height: 200,
    width: 300,
    margin: theme.spacing.xl,
    borderRadius: theme.spacing.borderRadius,
  },
  text: {
    color: theme.colors.error
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
