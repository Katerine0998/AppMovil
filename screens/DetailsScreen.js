import React from 'react';
import { View, Text } from 'react-native';


const DetailsScreen = ({navigation}) => {
 return (

 <View style={{ flex: 1, justifyContent: 'center', alignItems:
'center' }}>
 <Text> Pantalla de Detalles</Text>
 <Button title="Volver al inicio" onPress={() => navigation.goBack()} />
 </View>
 );
};
export default DetailsScreen;