import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet, TextInput, Button, FlatList} from 'react-native';

class App extends Component {
	state= {
		textState: '',
		arrayText: []
	}
	handleText =(text) => {
		this.setState({
			textState : text
		})
	}
	submit = () => {
		this.setState ( (state) =>{
			return {	
				...state,
				arrayText: [...state.arrayText,state.textState]
			}
		})
	}
    render(){
        return (
            <View>
	       		<TextInput placeholder="Fill this text" onChangeText ={this.handleText} >
      			</TextInput>   		
      			<Button title= "Click" onPress={this.submit} ></Button>
      			<FlatList 
	      			data ={this.state.arrayText}
	      			keyExtractor = {(item, index) => index.toString()}
	      			renderItem={(text,i) =>
	      				<Text>{text.item}</Text> 
	      			}
      			>
      			
      			</FlatList>
	      	</View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		padding : 10
	}
})

export default App;