import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/CounterFeautre/Counter';
import BannerCarousel from '../../component/BannerCarousel';

const HomeScreen = () => {
    const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();


  return (
    <ScrollView style={{ flex: 1, padding: 16 ,backgroundColor:'white'}}>
 
      <BannerCarousel/>
      
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />  <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />  <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
    </ScrollView>
  );
}

export default HomeScreen
