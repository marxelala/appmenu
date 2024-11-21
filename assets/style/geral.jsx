import { StyleSheet } from "react-native";

export default StyleSheet.create({
    botao: {
        position: "absolute",   // Isso coloca o botão fora do fluxo normal de layout
        bottom: 0,              // Fixando o botão na parte inferior
        right:0,               // Alinhando à esquerda da tela
        width: "100%",          // O botão vai ocupar toda a largura da tela
        alignItems: "center",   // Alinha o conteúdo do botão no centro (caso queira centralizar o conteúdo do botão)
        padding: 10,
      },

texto:{
    color: "#fff",
    textAlign: "center",
    paddingLeft:20,
        paddingRight:20
 
} 
      
});