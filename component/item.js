import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class Item extends Component {

    constructor(props) {
        super(props)
        this.alertItemName = this.alertItemName.bind(this)
    }

    alertItemName = (item) => {
        alert(item.title)
    }

    render() {
        return (
            <View>
                  <TouchableOpacity
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        item test
                     </Text>
                  </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
       backgroundColor: '#d9f9b1',
       alignItems: 'center',
    },
    text: {
       color: '#4f603c'
    }
 })

export default Item