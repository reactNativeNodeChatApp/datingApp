import React from 'react'
import {Text,View} from 'react-native'
function Main() {


    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            position => {
              const location = JSON.stringify(position);
          
              this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
          
    },[])

  return (
   <View>
    <Text>Main</Text>
   </View>
  )
}

export default Main