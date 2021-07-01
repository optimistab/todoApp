import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { withNavigation} from 'react-navigation';

const TaskDetail= ({atask,navigation}) =>{

    // console.log(atask);
    if(atask===[])return;
    const [tick,settick]=useState("checkcircleo");

    return (
        <View style={{flex:2,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#DDDDDD',borderBottomWidth:2}}>
            {/* <AntDesign name="checkcircle" size={24} color="black" /> */}
            <TouchableOpacity onPress={()=>{if(tick=="checkcircleo")settick("checkcircle")
        else{
            settick("checkcircleo")
        }}}>
            <AntDesign name= {tick} size={24} color="black" >
            </AntDesign>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Show',{atask})}>
            <Text style={styles.taskBox}>{atask.title}</Text>
            </TouchableOpacity>
            
          
         
        </View>
    );
};

const styles = StyleSheet.create({
    textSize :{
        fontSize:20
    },
    taskBox:{
        fontWeight:'bold',
        fontSize:16,
         alignSelf:'flex-end'

    }
});

export default withNavigation(TaskDetail);

