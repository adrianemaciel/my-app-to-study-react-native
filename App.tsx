import {Text, TextInput, View} from 'react-native';
import React from 'react';

const Cat = () => {
  return (
    <View>
      <Text>Hello, I'm ...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />

      <Text>Outher Name</Text>
      <TextInput
        style={{
          height: 50,
          borderColor: 'pink',
          borderWidth: 1,
        }}
        defaultValue="Name your!"
      />
    </View>
  );
};

export default Cat;
