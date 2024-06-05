

import React from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
 View,
 ScrollView
} from 'react-native';
// List with flatList elements
// const App=()=>  {
//   const users=[
//     {
//       id:1,
//       name:"John"
//     },
//     {
//       id:2,
//       name:"Peter"
//     },
//     {
//       id:3,
//       name:"Smith"
//     },
//     {
//       id:4,
//       name:"Dhoni"
//     }
//   ]
 
  

//   return (
    
//     <View>
//     <Text style={{fontSize:30}}>List with faltList components</Text>
//     <FlatList
//     data={users}
//     renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
//     keyExtractor={item=>item.id}
//     />
//   </View> 
//   );
// }

// const styles = StyleSheet.create({
  
//   item:{
//     fontSize:18,
//     padding:10,
//     color:'#fff',
//     backgroundColor:'blue',
//     borderWidth:1,
//     margin:10,

//   }
// });

// export default App;


//List with map functionality

const App=()=>  {
  const users=[
    {
      id:1,
      name:"John"
    },
    {
      id:2,
      name:"Peter"
    },
    {
      id:3,
      name:"Smith"
    },
    {
      id:4,
      name:"Dhoni"
    },
    
    {
      id:10,
      name:"Bruce"
    },
    {
      id:12,
      name:"Ekansh"
    },
    {
      id:13,
      name:"Harvansh"
    },
    {
      id:14,
      name:"swami"
    },
    {
      id:15,
      name:"Dhruv"
    },
    {
      id:16,
      name:"Bruce"
    },
    {
      id:17,
      name:"manish"
    },
    {
      id:18,
      name:"lokesh"
    },
    {
      id:19,
      name:"aaditya"
    },
  ]

  return (
    
        <View>
        <Text style={{fontSize:30}}>List with Map function </Text>
        <ScrollView style={{marginBottom:30}}>
       {
          users.map((item)=><Text style={styles.item}>{item.name}</Text>)
         
        
        }
         </ScrollView>
      
      </View> 
      );
}
const styles = StyleSheet.create({
  
    item:{
      fontSize:18,
      padding:10,
      color:'#fff',
      backgroundColor:'blue',
      borderWidth:1,
      margin:10,
  
    }
  });

  export default App;