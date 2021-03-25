import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, Image, Picker, StyleSheet, Text, TextInput, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import react from 'react';
import MapView from 'react-native-maps'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="História" component={Historia}/>
          <Drawer.Screen name="Cardápio" component={Cardapio}/>
          <Drawer.Screen name="Contato" component={Contato}/>
          <Drawer.Screen name="Localização" component={Localizacao}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}


 function Home({navigation}) {
  return (
    
    <View style={styles.container}> 

      <View style={styles.upbar}>
        <Icon name="bars" size={25} color="#fff" style={styles.iconmenu} onPress={()=>navigation.openDrawer()}/>
        <Text style={styles.upbartittle}>Cafeteria</Text>
      </View>

      <View style={styles.painel}>
      <Image source={require("./assets/cafeteria1.jpg")} style={styles.imgpainel}/>
      </View>

        <View style={styles.main}>
          <Text style={styles.txtmain}>
          No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos...
          </Text>
          <Text style={styles.txtmain}>
          Abriram o Café & Sabor e investiram muito amor, dedicação, trabalho e mais trabalho para que esse sonho se tornasse realidade. 
          </Text>
          <Text style={styles.txtmain}>
          Hoje, de cara nova, o Café & Sabor conta com um ambiente mais confortável e descolado, com a mesma qualidade de sempre, tanto nos produtos, como no atendimento. E aquele casal, hoje não tão jovem assim, ainda segue com seus sonhos e projetos, sempre pensando em você e seu bem estar. Venha nos visitar!
          </Text>
        </View>

      <View style={styles.footer}>

        <View style={{flexDirection:'row'}}>
            <Icon name="facebook" size={20} color="#333" style={{margin:5}}/>
            <Icon name="instagram" size={20} color="#333" style={{margin:5}}/>
            <Icon name="twitter" size={20} color="#333" style={{margin:5}}/>
            <Icon name="youtube" size={20} color="#333" style={{margin:5}}/>
        </View>

        <Text>Av. São Miguel, 4599, Jardim Cotinha, São Paulo - SP</Text>
      </View>
    </View>
  );
}

function Historia({navigation}) {
  return (
    <View style={styles.container}> 

      <View style={styles.upbar}>
        <Icon name="bars" size={25} color="#fff" style={styles.iconmenu} onPress={()=> navigation.openDrawer()}/>
        <Text style={styles.upbartittle}>Cafeteria</Text>
      </View>
      
      <View style={styles.painel}>
      <Image source={require("./assets/painel1.jpg")} style={styles.imgpainel}/>
      </View>

      <View style={styles.main}>
        <ScrollView horizontal={false} style={{flex:1}}> 
          <Text style={{fontSize:20, fontWeight:'bold'}}> História </Text>

          <Text style={styles.txtmain}>
           No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos...
          </Text>
          <Text style={styles.txtmain}>
            Abriram o Café & Sabor e investiram muito amor, dedicação, trabalho e mais trabalho para que esse sonho se tornasse realidade. 
          </Text>
          <Text style={styles.txtmain}>
           Hoje, de cara nova, o Café & Sabor conta com um ambiente mais confortável e descolado, com a mesma qualidade de sempre, tanto nos produtos, como no atendimento. E aquele casal, hoje não tão jovem assim, ainda segue com seus sonhos e projetos, sempre pensando em você e seu bem estar. Venha nos visitar!
          </Text>

          <Image source={require("./assets/cafeteria1.jpg")} style={styles.fotohistoria}/>
          <Image source={require("./assets/cafeteria2.jpg")} style={styles.fotohistoria}/>
          <Image source={require("./assets/cafeteria3.jpg")} style={styles.fotohistoria}/>
        </ScrollView>
      </View>

      <View style={styles.footer}>

        <View style={{flexDirection:'row'}}>
            <Icon name="facebook" size={20} color="#333" style={{margin:5}}/>
            <Icon name="instagram" size={20} color="#333" style={{margin:5}}/>
            <Icon name="twitter" size={20} color="#333" style={{margin:5}}/>
            <Icon name="youtube" size={20} color="#333" style={{margin:5}}/>
        </View>

        <Text>Av. São Miguel, 4599, Jardim Cotinha, São Paulo - SP</Text>
      </View>
    </View>
  );
}


 function Cardapio({navigation}) {
  return (
    <View style={styles.container}> 

      <View style={styles.upbar}>
        <Icon name="bars" size={25} color="#fff" style={styles.iconmenu} onPress={()=> navigation.openDrawer()}/>
        <Text style={styles.upbartittle}>Cafeteria</Text>
      </View>
      
      <View style={styles.painel}>
      <Image source={require("./assets/painel1.jpg")} style={styles.imgpainel}/>
      </View>

      <View style={styles.main}>
        <ScrollView horizontal={false} style={{flex:1}}> 
          <Text style={{fontSize:20, fontWeight:'bold'}}> Cardápio </Text>


            {/* Começo de CAFES */}

          <Text style={styles.titulo2}>
            Cafés          
          </Text>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/cafe1.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/cafe2.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/cafe3.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/cafe4.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

            {/* Começo de Salgados */}

          <Text style={styles.titulo2}>
            Salgados          
          </Text>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/salgado1.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/salgado2.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/salgado3.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/salgado4.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

            {/* COMEÇO DOS DOCES */}

          <Text style={styles.titulo2}>
            Doces         
          </Text>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/doce1.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/doce2.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/doce3.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

          <View style={{flexDirection:'row', flex:1}}>
            <Image source={require("./assets/doce4.jpg")} style={styles.imgcardapio} />
            <Text style={styles.txtcardapio}>
              No ano de 2000, um jovem casal, resolveu colocar em prática alguns de seus sonhos
            </Text>
          </View>

        </ScrollView>
      </View>
        

      <View style={styles.footer}>

        <View style={{flexDirection:'row'}}>
            <Icon name="facebook" size={20} color="#333" style={{margin:5}}/>
            <Icon name="instagram" size={20} color="#333" style={{margin:5}}/>
            <Icon name="twitter" size={20} color="#333" style={{margin:5}}/>
            <Icon name="youtube" size={20} color="#333" style={{margin:5}}/>
        </View>

        <Text>Av. São Miguel, 4599, Jardim Cotinha, São Paulo - SP</Text>
      </View>
    </View>  );
}


 function Contato({navigation}){
   const[assunto, setAssunto] = React.useState ("");
  return (
    <View style={styles.container}> 

      <View style={styles.upbar}>
        <Icon name="bars" size={25} color="#fff" style={styles.iconmenu} onPress={()=>navigation.openDrawer()}/>
        <Text style={styles.upbartittle}>Cafeteria</Text>
      </View>

      <View style={styles.painel}>
      <Image source={require("./assets/cafeteria1.jpg")} style={styles.imgpainel}/>
      </View>

        <View style={styles.main}>

          <ScrollView horizontal={false} style={{flex:1}}> 

              <Text style={{fontSize:20, fontWeight:'bold'}}> Entre em Contato </Text>

              <TextInput placeholder="Nome Completo" style={styles.txtinput} />
              <TextInput placeholder="E-mail" style={styles.txtinput} keyboardType="email-address" />
              <TextInput placeholder="Telefone" style={styles.txtinput} keyboardType="phone-pad" />

              <Picker style={styles.txtinput} onValueChange={(itemValue,itemIndex) => setAssunto(itemValue)} selectedValue={assunto}> 
                <Picker.Item label='Sugestão' value="Sugestão"/>
                <Picker.Item label='Crítica' value="Crítica"/>
                <Picker.Item label='Dúvida' value="Dúvida"/>
              </Picker>

              <TextInput multiline={true} placeholder="Mensagem" style={styles.txtmult}/>
              <Button title="Enviar"/>
          </ScrollView>

        </View>


      <View style={styles.footer}>

        <View style={{flexDirection:'row'}}>
            <Icon name="facebook" size={20} color="#333" style={{margin:5}}/>
            <Icon name="instagram" size={20} color="#333" style={{margin:5}}/>
            <Icon name="twitter" size={20} color="#333" style={{margin:5}}/>
            <Icon name="youtube" size={20} color="#333" style={{margin:5}}/>
        </View>

        <Text>Av. São Miguel, 4599, Jardim Cotinha, São Paulo - SP</Text>
      </View>
    </View>
  );
}


 function Localizacao({navigation}){
  return (
    <View style={styles.container}> 

      <View style={styles.upbar}>
        <Icon name="bars" size={25} color="#fff" style={styles.iconmenu} onPress={()=>navigation.openDrawer()}/>
        <Text style={styles.upbartittle}> Cafeteria </Text>
      </View>

      <View style={styles.painel}>
      <Image source={require("./assets/cafeteria1.jpg")} style={styles.imgpainel}/>
      </View>

        <View style={styles.main}>

         <Text style={{fontSize:25, fontWeight:'bold'}}> Nossa Localização </Text>

         <MapView style={styles.map} 
            initialRegion={{
              latitude: -23.515648870289535,
              longitude: -46.51931758338815,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
         />
        </View>

      <View style={styles.footer}>

        <View style={{flexDirection:'row'}}>
            <Icon name="facebook" size={20} color="#333" style={{margin:5}}/>
            <Icon name="instagram" size={20} color="#333" style={{margin:5}}/>
            <Icon name="twitter" size={20} color="#333" style={{margin:5}}/>
            <Icon name="youtube" size={20} color="#333" style={{margin:5}}/>
        </View>

        <Text>Av. São Miguel, 4599, Jardim Cotinha, São Paulo - SP</Text>
      </View>
    </View>
  );
}



// -----------------------------------------------------------------------------------------------------------------------------------------------------

// começo do CSS

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
    },

    upbar:{
      flex:2,
      flexDirection:'row',
      backgroundColor:'#900',
      justifyContent:'center',
      alignItems:'center'
    },

    painel:{
      flex:3,
      backgroundColor:'#aaa',
      justifyContent:'center',
      alignItems:'center'
    },

    main:{
      flex:10,
      backgroundColor:'#fff',
      padding:20
    },

    footer:{
      flex:2,
      backgroundColor:'#fff',
      borderTopColor:'silver',
      borderTopWidth:1,
      borderStyle:'solid',
      justifyContent:'center',
      alignItems:'center'
    },

    iconmenu:{
      position:'absolute',
      left:10,
      top:30
    },

    upbartittle:{
      fontSize:30,
      color:'white'
    },

    imgpainel:{
      resizeMode:'cover',
      width:'100%',
      height:'100%'
    },

    txtmain:{
      textAlign:'justify',
      marginBottom:10,
      fontSize:18
    },

    fotohistoria:{
      width:'100%',
      height:200,
      resizeMode:'cover',
      marginBottom:10 
    },

    titulo2:{
      marginTop:10,
      marginBottom:10,
      fontSize:16,
      fontWeight:'bold'
    },

    imgcardapio:{
      width: 80,
      height: 80,
      resizeMode:'contain'
    },

    txtcardapio:{
      padding:10,
      width:'70%',
      textAlign:'justify'
    },

    txtinput:{
      width:"90%",
      height:40,
      borderBottomColor:'silver',
      borderBottomWidth:2,
      marginBottom:5
    },

    txtmult:{
      width:"90%",
      height:90,
      borderBottomColor:'silver',
      borderBottomWidth:2,
      padding:5,
      marginBottom:40,
    },

    map:{
      width: '100%',
      height: '100%',

    }


})
