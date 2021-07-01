import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import TaskScreen from './src/screens/TaskScreen';
import ShowTask from './src/screens/ShowTask';
import Datesample from './src/screens/Datesample';


const navigator = createStackNavigator(
  {
    Alltask:HomeScreen,
    Task:TaskScreen,
    Show:ShowTask,
    Datecheck:Datesample
  },
  {
    initialRouteName: 'Task',
    defaultNavigationOptions:{
      title: 'All tasks'
  }
});


export default createAppContainer(navigator);