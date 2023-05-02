import {Image, Text, TextInput, View} from 'react-native';
import React from 'react';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
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

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{
          height: 200,
          width: 200,
        }}
      />
      <Text>Hello, I'm {props.name}</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
    </View>
  );
};

export default Cafe;
