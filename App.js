import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {StyleSheet} from 'react-native'
import Home from './src/components/home';
import Cadastro from './src/components/cadastro';
import Consulta from "./src/components/consulta";
import Edicao from "./src/components/edicao"

const Stack = createNativeStackNavigator();


export default function App() {
  return (
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen 
            name="home"
            component={Home}
            options={{ title: 'Bem vindos a Summoners Drift' }}

            />
            <Stack.Screen
            name= "cadastro"
            component={Cadastro} 
            />
            <Stack.Screen 
            name = "consulta"
            component={Consulta}
            />
             <Stack.Screen 
            name = "edicao"
            component={Edicao}
            />
          </Stack.Navigator>
        </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container:{
      backgroundColor: 'lightcyan',
      alignItems: 'center',
      justifyContent: 'center',
  },
 })