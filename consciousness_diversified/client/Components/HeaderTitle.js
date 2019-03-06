import React from 'react';
import axios from 'axios'
import { Image, View, Text } from 'react-native';

export default class HeaderTitle extends React.Component {
   state = {
    loggedOut: false
  }

  onLogOut = async () => {
    const response = await axios.delete('http://58f6feea.ngrok.io/logout')
    
    this.setState({
      loggedOut: true
    })

    await this.props.navigation.navigate("Home") 
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/app_images/ouro_logo.png')}
          style={{ width: 30, height: 30, marginLeft: '15%' }}
        />
      </View>
      
      <Text style={{flex:3, fontWeight: 'bold', color: 'white', fontSize: 16, marginLeft: '5%'}}>Consciousness Diversified</Text>
      </View>
    );
  }
}