import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.wines}>
          <Ionicons name="cafe" size={32} color="green" />
           Wine      <Ionicons name="arrow-forward" size={20}  />

         </Text>
         <Text style={styles.soups}>
         <Ionicons name="md-checkmark-circle" size={32} color="green" />
          soups                             >
         </Text>
         <Text style={styles.burgers}>
         <Ionicons name="md-checkmark-circle" size={32} color="green" />
         Burgers          >
         </Text>
          <Text style={styles.cakes}>
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
          Cakes             >
          </Text>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 20,
     backgroundColor: '#F5FCFF',
   },
   wines: {
     flex: 1,
     backgroundColor: 'orange',
     textAlign: 'center',
     fontSize: 20,
     paddingTop: 70,
   },
   soups: {
     flex: 1,
     backgroundColor: 'pink',
     textAlign: 'center',
     fontSize: 20,
     paddingTop: 70,
   },
   burgers: {
     flex: 1,
     backgroundColor: 'powderblue',
     textAlign: 'center',
     fontSize: 20,
     paddingTop: 70,
   },
   cakes: {
     flex: 1,
     backgroundColor: 'lightgreen',
     textAlign: 'center',
     fontSize: 20,
     paddingTop: 70,
   },
 });
