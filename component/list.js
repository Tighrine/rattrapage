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

    componentDidMount() {
        fetch("https://openagenda.com/agendas/95716291/events.json?key=2957e06e5b2e49a0bd17f18a6308156e&limit=1", {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            this.setState({isLoading: false, events: data.events})
            console.log(this.state.events)
        }).catch(err => {
            console.log(err)
        })
    }

    renderItem(data) {
        return( 
            <View>
                <Text>{data}</Text>
            </View>
        )
    }

    render() {
        const { events, isLoading } = this.state;
        console.log("evts: " + JSON.stringify (events))
        if (isLoading) {
            return(
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            return (
                this.state.events.map((item, index) => {
                    <View>
                        <Text>{item}</Text>
                    </View>
                })
            )
        }
    }
}

export default List