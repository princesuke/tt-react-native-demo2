
import { View, Text, StyleSheet } from 'react-native';
// import {MyButton} from './MyButton';

const HomeCard = ({ title, description}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      {/* <MyButton 
        title="Detail" 
        onPress={() => {}} 
        color="#03dac6" 
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#6200ee',
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  desc: {
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
  }
});

export default HomeCard;
