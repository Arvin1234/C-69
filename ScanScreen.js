import React from 'react';
import { Text, View } from 'react';

export default class Scanscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Scan</Text>
        </View>
      );
    }
  }