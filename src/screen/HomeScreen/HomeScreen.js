import React from 'react'
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/CounterFeautre/Counter';

const HomeScreen = () => {
    const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
    </View>
  );
}

export default HomeScreen
