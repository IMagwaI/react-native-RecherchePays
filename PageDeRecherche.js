import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
type Props = {};
function urlPourRequete(valeur) {
  return 'https://restcountries.eu/rest/v2/name/'
    + valeur;
}
export default class PageDeRecherche extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      requeteDeRecherche: 'morocco',
      estEnChargement: false,
      message: '',
    };
  }
  _auChangementDeLaRecherche = (event) => {
    console.log('_auChangementDeLaRecherche');
    this.setState({ requeteDeRecherche: event.nativeEvent.text });
    console.log('Current: ' + this.state.requeteDeRecherche + ', Next: ' + event.nativeEvent.text);
  };
  _executerRequete = (requete) => {
    console.log(requete);
    this.setState({ estEnChargement: true });
  };
  _auDemarrageDeLaRecherche = () => {
    const requete = urlPourRequete(this.state.requeteDeRecherche);
    this._executerRequete(requete);
    fetch(requete)
      .then(reponse => reponse.json())
      .then(json => this._gererLaReponse(json))
      .catch(error =>
        this.setState({
          estEnChargement: false,
          message: 'Quelque chose de mauvais s\'est produit' + error
        }));
  };
  _gererLaReponse = (reponse) => {
    this.setState({ estEnChargement: false, message: '' });
    this.props.navigation.navigate('Resultats', {listings: reponse}); 
  }; 

  render() {

    const indicateurDeChargement = this.state.estEnChargement ? <ActivityIndicator size='large' color='0000ff' /> : null;
    return <View style={styles.fluxDroite}>
      <TextInput
        underlineColorAndroid={'transparent'}
        style={styles.requeteEntree}
        value={this.state.requeteDeRecherche}
        onChange={this._auChangementDeLaRecherche}
        placeholder="Rechercher par nom de pays" />
      <Button
        onPress={this._auDemarrageDeLaRecherche}
        color='#48AAEC'
        title='Démarrer'
      />
      <Image source={require('./Ressources/pays.png')} style={styles.image} />
      {indicateurDeChargement}
      <Text style={styles.description}>{this.state.message}</Text>

    </View>
      ;
  }
} const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 140,
  },

});