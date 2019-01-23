import React ,{Component} from 'react'
import {Text,FlatList,View,StyleSheet,TextInput,TouchableOpacity, Alert,Keyboard,KeyboardAvoidingView,TouchableHighlight} from 'react-native'

export default class MyFlatList extends Component
{
constructor(props)
{
super(props);

this.array=[{title:"buy car",IsDone:false},
{title:"go to school",IsDone:true}],
this.state={

arrayHolder:[],
selectedItem:'',
textInput_Holder:'',
IsSelected:false,
SelectedId:0
}

}

SelectedItem(index){
  
  this.setState({IsSelected:!this.state.IsSelected,SelectedId:index});

}

compare=(a,b)=> {
  if (a.IsDone < b.IsDone)
    return -1;
  if (a.IsDone > b.IsDone)
    return 1;
  return 0;
}


componentDidMount() {
  this.array.sort(this.compare)
this.setState({arrayHolder:[...this.array]})
//this.setState({count:this.array.length})

  }

joinData=()=>{
  if(this.state.textInput_Holder)
  {
this.array.push({title:this.state.textInput_Holder,index:this.state.count,IsDone:false})
this.array.sort(this.compare)
this.setState({arrayHolder:[...this.array]})
this.setState({textInput_Holder:""})
Keyboard.dismiss();
  }else
  {
    Alert.alert("Enter Data!");
  }
}    

completeData=()=>{

  if(this.state.IsSelected)
  {
  this.array[this.state.SelectedId].IsDone=true;
  this.array.sort(this.compare)
  this.setState({arrayHolder:[...this.array]})
  this.setState({IsSelected:false})
  }else
  {
Alert.alert("Select item!");
  }
   
}


deleteData=()=>{
  if(this.state.IsSelected)
  {
  this.array.splice(this.state.SelectedId,1);
  this.array.sort(this.compare)
  this.setState({arrayHolder:[...this.array]})
  this.setState({IsSelected:false})
  }else
  {
Alert.alert("Select item!");
  }

  }    
  

FlatListSeparator=()=>{
return(
<View style={{height:1,
width:"100%",backgroundColor:"#006400"}} 
underlineColorAndroid='transparent'/>

);
}

render() {
    return (
      <KeyboardAvoidingView
      style={styles.KeyboardContainer}
      behavior="padding" enabled
    >   
    <Text style={styles.Header}>TO DO:</Text>
    
        <FlatList style={styles.ListContainer}

          data={this.state.arrayHolder}

          width='100%'

          extraData={this.state.arrayHolder}

          keyExtractor={(item,index) =>index.toString()}

          ItemSeparatorComponent={this.FlatListSeparator}

          renderItem={({ item,index }) =>
          <TouchableHighlight  underlayColor={'gray'} onPress={this.SelectedItem.bind(this,index)} style={item.IsDone? styles.ItemContainerSelected: styles.ItemContainerNoSelected} > 
           <Text style={styles.item} > 
           {item.title} </Text>
           </TouchableHighlight>
           }
        />
      
<View style={styles.Container}>
      <TextInput
         value={this.state.textInput_Holder}
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity onPress={this.joinData} style={styles.button}  activeOpacity={0.7}  >

          <Text style={styles.buttonText}> Add Task</Text>

        </TouchableOpacity>

<View style={styles.ContainerRow}>
        <TouchableOpacity   onPress={this.completeData} style={styles.buttonRow}  activeOpacity={0.7}  >

           <Text style={styles.buttonText}> Done! </Text>

        </TouchableOpacity> 

        <TouchableOpacity onPress={this.deleteData} style={styles.buttonRow}  activeOpacity={0.7}  >

        <Text style={styles.buttonText}> Delete!  </Text>

        </TouchableOpacity>
  </View>
</View>
        </KeyboardAvoidingView>    
    );
  }
}

  const styles = StyleSheet.create({
 
    Header: {
   marginTop:15,
      justifyContent: 'center',
      alignItems: 'center',    
      fontSize:28    
    },

    ItemContainerNoSelected: {
   
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,    
    },
    ItemContainerSelected: {
   
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,    
      backgroundColor:'#008B45'

    },
    MainContainer: {
   
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,    
    },

    KeyboardContainer: {

      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,    
      width:'98%',  
    },
   
     Container:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,    
      width:'100%',
     },
     ContainerRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,    
      width:'100%',
     },

    ListContainer:{
      marginTop:5,
      height:'20%',
      backgroundColor:'#4CAF50'

    },

    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
   
    textInputStyle: {
   
      textAlign: 'center',
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderColor: '#4CAF50',
      borderRadius: 7,
      marginTop: 12
    },
   
    button: {
   
     width: '100%',
      height: 40,
      padding: 10,
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      marginTop: 10
    },
   
    buttonRow: {
   
      width:'46%',
       height: 40,
       padding: 10,
       backgroundColor: '#4CAF50',
       borderRadius: 8,
       marginTop: 10
     },

    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
   
  });





