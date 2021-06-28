import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text,
} from 'react-native';

type Props = {};
export default class ResultatsDeRecherche extends Component<Props> {
    _extracteurClef = (item, index) => index.toString();

    _rendreItem = ({ item, index }) => (
        <ListItem
            item={item}
            index={index}
            onPressItem={this._itemAppuye}
        />
    );
    _itemAppuye = (index) => {
        console.log('Ligne appuyée : ' + index);
    };
    render() {
        console.log(this.props.route.params);
        const { listings } = this.props.route.params;
        return (
            <FlatList
                data={listings}
                keyExtractor={this._extracteurClef}
                renderItem={this._rendreItem}
            />
        );
    }
}
class ListItem extends React.PureComponent {
    _itemAppuye = () => {
        this.props.onPressItem(this.props.index);
    }
    render() {
        const item = this.props.item;
        return (
            <TouchableHighlight
                onPress={this._itemAppuye}
                underlayColor='#eedddd'>
                <View >
                    <View style={styles.conteneurLigne}>
                        <View style={styles.conteneurTexte}>
                            <Text style={styles.nom}>{item.name}</Text>
                            <Text style={styles.region}>{item.region}</Text>
                            <Text style={styles.subregion}>{item.subregion}</Text>
                            <Text style={styles.capital}>{item.capital}</Text>
                            <Text style={styles.population}>{item.population}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    conteneurTexte: {
        borderColor:'#58BEEC',
        borderRadius: 20,
        padding: 12,


        flex: 1
    },
    separateur: {
        height: 1,
        backgroundColor: '#eedded'
    },
    nom: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#58BEEC',
        backgroundColor: '#fff',

    },
    region: {
        fontSize: 20,
        color: '#656565',

        
    },
    subregion: {
        fontSize: 20,
        color: '#156699',
        fontWeight:'bold',
        alignContent:"center"
    },
    capital: {
        fontSize: 20,
        color: '#8D2D18'
        
    },
    population: {
        fontSize: 20,
        color: '#FF5733',
        fontWeight:'bold',

    },

    conteneurLigne: {
        flexDirection:"row",
        padding: 10,
        borderBottomColor: "blue",
    borderBottomWidth: 1.2,
    borderRadius:20,
    borderLeftWidth:1.2,
    borderRightWidth:1.2,
    },
});