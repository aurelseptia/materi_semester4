import {view , text} from 'react native';
import tw from 'twrnc';

const MyComponent =() => (
  <View style = {tw`p-4 android:pt-2 bg-white dark:bg-black`}>
    <Text style = {tw`text-md text-black dark:text-white`}>Hello World</Text>
    </View>
);
import  React, {useState} from 'react';
import { SafeAreaView,Text, View, Switch  } from 'react-native';
import  tw from 'twrnc';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={tw`flex-1 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text
          style={tw`text-3xl font-bold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Hello World
        </Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>
    </SafeAreaView>
  );
}