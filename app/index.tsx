import { Text, View, SafeAreaView, Pressable, Image, requireNativeComponent } from "react-native";
import Primeiro from '../components/Primeiro'
import { Link } from "expo-router";
import Estilo from "../assets/style/geral";

export default function Index() {
  return (
    <SafeAreaView
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B966B"
  }}
>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require("../assets/images/set.png")} />

    <Text style={{color:"#fff"}}> 
      <h2>Seja bem vindo!</h2>
    </Text>
    <Text style={Estilo.texto}> 
      <h3>
      Bem-vindo ao nosso app de estudos! Aqui, você tem acesso a conteúdos exclusivos e uma experiência personalizada para aprender no seu ritmo. Vamos juntos alcançar seus objetivos e tornar o aprendizado mais divertido e eficaz!
      </h3>
    </Text>
    
  </View>
</SafeAreaView>

  );
}
