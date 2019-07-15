import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList } from 'react-native'
import Item from "./item";

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
            isLoading: true
        }
    }

    componentWillMount() {
        fetch("https://openagenda.com/agendas/95716291/events.json?key=2957e06e5b2e49a0bd17f18a6308156e&limit=1", {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            this.setState({events: data.events, isLoading: false})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const { events, isLoading } = this.state;
        if (isLoading === true) {
            return(
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            console.log("Events: " + this.state.events.length)
            return (
                
                this.state.events.map((item, index) => {
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                })
            )
        }
    }
}

export default List