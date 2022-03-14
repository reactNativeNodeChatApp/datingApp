import React from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";
function Auth(props) {
  const [login, setLogin] = React.useState(true);

  const styles = StyleSheet.create({
      container:{height: '100%', width: '100%', backgroundColor: '#fff',display:'flex', alignItems: 'center', justifyContent: 'center'},
    input: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlign: "center",
    },
    lable: {
      textAlign: "center",
      fontStyle: "normal",
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.container}>
      {!login ?  <Button title='Login' onPress={()=>{setLogin(true)}} /> : 
      <Button title='Sign Up' onPress={()=>{setLogin(false)}} />}
            

     <Text>{login}</Text>

            {login ? <View>
        <Text style={styles.lable}>Login</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />

      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate("Main");
        }}
      />
     </View> : <View>
     <Text style={styles.lable}>Register</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <Button
        title="Sign Up"
        onPress={() => {
          alert("hi");
        }}
      />
         </View>}
    </View>
  );
}

export default Auth;
