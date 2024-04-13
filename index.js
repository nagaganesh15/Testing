import React, {useState} from 'react';
import {Text,TextInput,View,StyleSheet,Button} from 'react-native';

const style=StyleSheet.create({
  pad:{
    padding:20,
    alignItems: 'center',
  },
  textstyle:{
    marginLeft:5,
    paddingLeft:2,
    borderWidth:2,
  },
  bu:{
    paddingTop:5,
    width:100,
    alignItems: 'center',
  },
});

const sample=()=>{
  const [ftext,fsettext]= useState('');
  const [ltext,lsettext]=useState('');
  const [submission,setsubmission]=useState(false);
  const ha=()=>{
    setsubmission(true);
  };
  return(
    <View style={style.pad}>
      <Text>First Name : 
        <TextInput
          style={style.textstyle}
          onChangeText={newtext=>fsettext(newtext)}
        />
      </Text>
      <View style={{paddingTop:5}}></View>
      <Text >Last Name :
      <TextInput
        style={style.textstyle}
        onChangeText={newtext=>lsettext(newtext)}
      />
      </Text>
      <View style={style.bu}>
      <Button
        title='Submit'
        onPress={ha}
      />
      </View>
      {submission&&(<Text>{ftext}{ltext}</Text>)}
    </View>
  );
};




export default sample;