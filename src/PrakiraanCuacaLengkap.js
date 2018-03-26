import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Button, TextInput, View
} from 'react-native';
export default class PrakiraanCuacaLengkap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: '',
      forecast:{
        main: '-',
        description: '-',
        temp: 0,
        ws: 0,
        sr: '-',
        ss: '-',
        pressure: 0,
        humidity: 0,
        slevel: 0,
        glevel: 0
      }
    };
  }

getWeather= () => {
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.kota +'&appid=b5858650bc90c860c120bd6ea4660f23&units=metric';
fetch (url)
.then ((response) => response.json())
.then((responseJson) => {
            //console.log(responseJson);
            this.setState({
              forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp,
                ws: responseJson.wind.speed,
                sr: responseJson.sys.sunrise,
                ss: responseJson.sys.sunset,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                slevel: responseJson.main.sea_level,
                glevel: responseJson.main.grnd_level     
              }
            });
          });
        }

  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.Header}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#E8F5E9'}} >Prakiraan Cuaca</Text>
      </View>

      <View style={styles.boxInput}>
          <Text style={{ textAlign: 'center', padding: 3, fontSize: 20 , color: '#E8F5E9'}}>Nama Kota</Text>
          
          <View style={styles.textBoxStyle}>
          <TextInput style = {{height: 50}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(kota)=>this.setState({kota})}
          />
          </View>

          <View style={styles.buttonStyle}>
          <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#00BCD4"
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
                    <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Kota : {this.state.kota}
            </Text>
          </View>
      </View>

      
      <View style={styles.boxOutput}>
        <View style={styles.boxOutput1}>


          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Cuaca : {this.state.forecast.main}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Deskripsi : {this.state.forecast.description}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Temperatur : {this.state.forecast.temp} {"' Celcius"}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Wind Speed : {this.state.forecast.ws}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Sunrise : {this.state.forecast.sr}
            </Text>
          </View>
          </View>
        <View style={styles.boxOutput1}>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Sunset : {this.state.forecast.ss}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Presure : {this.state.forecast.pressure}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Humidity : {this.state.forecast.humidity}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Sea Level : {this.state.forecast.slevel}
            </Text>
          </View>
          <View style={styles.smallBoxOuput}>
            <Text style = {styles.textBox} >
            Ground Level : {this.state.forecast.glevel}
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.Footer}>
          <Text style={{ textAlign: 'right', padding: 18, fontSize: 14,color: 'white' }} >@aryadaputra</Text>
      </View>

</View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E0F7FA',
    flex: 1,
    flexDirection: 'column'
  },
  Footer: {
    flex: 1,
    height: 60,
    backgroundColor: '#00BCD4',
  },
  Header: {
    flex: 1,
    height: 80,
    backgroundColor: '#00BCD4',
  },
  boxInput: {
    flex: 2,
    backgroundColor: '#80DEEA',
    margin: 10
  },
  boxOutput: {
    backgroundColor: '#00BCD4',
    flex: 2,
    margin: 10,
    flexDirection: 'row'
  },
  boxOutput1: {
    flex: 4,
    backgroundColor: '#B2EBF2',
    justifyContent: 'space-around',
    margin: 1
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  textBoxStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#E0F7FA'
  },
  smallBoxOuput: {
    flex: 1,
    backgroundColor: '#80DEEA',
    justifyContent: 'space-around',
    margin: 2
  },
  textBox: {
    padding: 5,
    fontSize: 15,
    color: 'black'
  }

});
