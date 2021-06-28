/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import ResultatsDeRecherche from './ResultatsDeRecherche';
import './PageDeRecherche';
import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PageDeRecherche from './PageDeRecherche.js';
const Pile = createStackNavigator();
function MaPile() {
  return (
    <Pile.Navigator>
      <Pile.Screen name="Accueil" component={PageDeRecherche} />
      <Pile.Screen name="Resultats" component={ResultatsDeRecherche} />

    </Pile.Navigator>
  );
}
export default class App extends Component<Props> {

  render() {
    return (
        <NavigationContainer>
          <MaPile />
        </NavigationContainer>
    );
  }
}