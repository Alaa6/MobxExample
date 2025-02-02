import React from 'react';
   import { observer } from 'mobx-react';
   import counterStore from '../store/counter-store';
import { Button, Text, View } from 'react-native';

   const Counter = observer(() => {
       return (
           <View>
               <Text>{counterStore.count}</Text>
               <Button onPress={() => counterStore.increment()} title="Increment"/>
               <Button onPress={() => counterStore.decrement()} title="Decrement"/>
           </View>
       );
   });

   export default Counter;