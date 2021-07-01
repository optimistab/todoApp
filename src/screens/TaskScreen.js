import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import TaskDetail from '../components/TaskDetail';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// var DATA = [
//     {
//         id: Math.floor((Math.random() * 1000)).toString(32),
//         title:'react learn1'
//     },
//     {
//         id: Math.floor((Math.random() * 1000)).toString(32),
//         title:'react learn2'
//     },
//     {
//         id: Math.floor((Math.random() * 1000)).toString(32),
//         title:'react learn3'
//     }get
// ];
const TaskScreen =({navigation}) =>{


    // console.log(navigation.state.params.temptask.date.target);
    // console.log(navigation.state);
    console.log(navigation);

    const getnewtask =  () =>{
        var newtask = {
            id: Math.floor((Math.random() * 1000)).toString(32),
            title: navigation.state.params.temptask.title.work,
            date: navigation.state.params.temptask.date.target
        };
        // console.log("new task added");
        return newtask;
    };
    
    const[task,settask]=useState([
        {
            id: Math.floor((Math.random() * 1000)).toString(32),
            title:'react learn1',
            date : ''
        },
        {
            id: Math.floor((Math.random() * 1000)).toString(32),
            title:'react learn2',
            date : ''
        },
        {
            id: Math.floor((Math.random() * 1000)).toString(32),
            title:'react learn3',
            date : ''
        }
    ]);
    // console.log('abhy');

    // console.log(task);
    useEffect(()=>{
        if(navigation.state.params)settask([...task,getnewtask()]);
        console.log("one");
    },[]);

    // if(navigation.state.params)settask([...task,getnewtask()]);


    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    // const showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };

    // const hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    // };

    // const handleConfirm = (date) => {
    //     console.warn("A date has been picked: ", date);
    //     hideDatePicker();
    // };


    
    
//settask([...task,getnewtask()]);
    var atask = {
        id: Math.floor((Math.random() * 1000)).toString(32),
            title: '',
            date: ''
    };

    return (
    <View>
        <TouchableOpacity 
        onPress={ ()=>navigation.navigate('Show',{atask})
            // console.log("new task added  44");
            // ()=>navigation.navigate('Show',{atask})}
        } 
        style={styles.button}><Text>Add a new Task</Text></TouchableOpacity>


        <Text style={styles.textSize}>Pending tasks</Text>

        
        <FlatList
        data={task}
        keyExtractor={task=>task.id}
        renderItem = {({item}) =>{
            return (
             <TaskDetail atask={item}></TaskDetail>
            );
        }
        }>
        </FlatList>

    </View>
    );
};




const styles = StyleSheet.create({
    textSize :{
        fontSize:20,
        borderBottomWidth:2
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    taskbutton:{
        backgroundColor: "#DDDDDD",
        borderBottomColor: "#1a1919",
        borderBottomWidth:1,
        height:30

    }
});
export default TaskScreen;