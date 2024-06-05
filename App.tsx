

import React from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
 View,
} from 'react-native';

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
    }
  ]
 
  

  return (
    
    <View>
    <Text style={{fontSize:30}}>List with faltList components</Text>
    <FlatList
    data={users}
    renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
    keyExtractor={item=>item.id}
    />
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
