import { Text, View, StyleSheet, FlatList, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const banner = [
  {
    id: 1,
    title: "Gran Turismo",
    image: "https://www.einerd.com/wp-content/uploads/2023/08/gran-turismo.jpg"
  },
  {
    id: 2,
    title: "Cinepop",
    image: "https://cinepop.com.br/wp-content/uploads/2020/12/poster1.jpg"
  },
  {
    id: 3,
    title: "Oppenheimer",
    image: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2eff-a563-7bb9-9b85-715e90eda701/compose?aspectRatio=1.78&format=webp&width=1200"
  }
]

const {width} = Dimensions.get("window")



const filmesEmAlta = [
  {
    id: 1,
    title: "Cidade de Deus",
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/CidadedeDeus.jpg/250px-CidadedeDeus.jpg"
  },
  {
    id: 2,
    title: "Vingadores:Ultimato",
    image: "https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg"
  },
  {
    id: 3,
    title: "Coringa 2",
    image: "https://upload.wikimedia.org/wikipedia/pt/e/e9/Joker_Folie_%C3%A0_Deux_poster.jpg"
  },
  {
    id: 4,
    title: "Telefone Preto 2",
    image: "https://static3.moviehub.com.br/fotos/filmes/poster/16692_medio.jpg"
  }
]
const serieEmAlta = [
  {
    id: 1,
    title: "The Last of Us",
    image: "https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg"
  },
  {
    id: 2,
    title: "Senna",
    image: "https://upload.wikimedia.org/wikipedia/pt/d/d6/Senna-S%C3%A9rie-2024-Ayrton-Senna-Banner.jpg"
  },
  {
    id: 3,
    title: "Neymar: O Caos Perfeito",
    image: "https://images.ctfassets.net/3mv54pzvptwz/3byMPWwVdxKYjxBZpU7RgS/0f604d63492506b783d62d093060e5f2/PT-BR_NTPC_PRE_4x5_RGB_PRE__1_.jpg"
  },
  {
    id: 4,
    title: "Roda do Tempo",
    image: "https://aventurasnahistoria.com.br/wp-content/uploads/amazon/a-roda-do-tempo_1.jpg"
  },
]
const desenho = [
  {
    id: 1,
    title: "Divertidamente 2",
    image: "https://ingresso-a.akamaihd.net/prd/img/movie/divertida-mente-2/61ac248d-e3e6-4e33-9515-8ce0621a32fa.webp"
  },
  {
    id: 2,
    title: "Carros",
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Carros_p%C3%B4ster.jpg/250px-Carros_p%C3%B4ster.jpg"
  },
  {
    id: 3,
    title: "Incriveis",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBtPJvdWsJO8bveomRsvaQU7XpM_VICz4jA&s"
  },
  {
    id: 4,
    title: "Ponyo",
    image: "https://br.web.img3.acsta.net/medias/nmedia/18/87/90/53/19962752.asp.jpg"
  },
]



export default function Index() {
  return (
    <SafeAreaView style={style.container}>

    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <Text style={style.mainTitle}>BentoFlix</Text>
      <Text style={style.welcomeText}>Bem vindo, ao seu catalogo de filmes e cinemas</Text>
    </View>

    <View style={style.section}>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={banner} renderItem={(({item}) => (
      
      <View style={style.bannerContainer}>
        <View style={style.bannerItem}>
          <Image style={style.bannerImage} source={{uri: item.image}}  />
          <TouchableOpacity style={style.bannerButton}>
            <Text style={style.bannerButtonText}>Assistir</Text>
          </TouchableOpacity>
        </View>
      </View>
      ))}></FlatList>
    </View>

    <View style={style.section}>
      <Text style={style.sectionTitle}>Filmes em Alta</Text>
      <FlatList contentContainerStyle={style.movieList} horizontal showsHorizontalScrollIndicator={false} data={filmesEmAlta} renderItem={(({item}) => (
      
      <View style={style.movieItem}>
        <Image style={style.movieImage} source={{uri: item.image}}  />
        <Text style={style.movieTitle}>{item.title}</Text>
      </View>
      ))}></FlatList>
    </View>
    <View style={style.section}>
      <Text style={style.sectionTitle}>Series em Alta</Text>
      <FlatList contentContainerStyle={style.movieList} horizontal showsHorizontalScrollIndicator={false} data={serieEmAlta} renderItem={(({item}) => (
      
      <View style={style.movieItem}>
        <Image style={style.movieImage} source={{uri: item.image}}  />
        <Text style={style.movieTitle}>{item.title}</Text>
      </View>
      ))}></FlatList>
    </View>
    <View style={style.section}>
      <Text style={style.sectionTitle}>Desenhos</Text>
      <FlatList contentContainerStyle={style.movieList} horizontal showsHorizontalScrollIndicator={false} data={desenho} renderItem={(({item}) => (
      
      <View style={style.movieItem}>
        <Image style={style.movieImage} source={{uri: item.image}}  />
        <Text style={style.movieTitle}>{item.title}</Text>
      </View>
      ))}></FlatList>
    </View>

    </ScrollView >
    </SafeAreaView >
  );
}
const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#000",
    flex: 1
  },
  mainTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 25
  },
  movieImage: {
    width: 120,
    height: 180
  },
  movieTitle: {
    color: "#c6c6c6",
    marginTop: 5,
    fontSize: 12,
    fontWeight: 600,
    flexWrap: "wrap"
  },
  sectionTitle: {
    color: "#e5e5e5",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  movieItem: {
    width: 120
  },
  movieList: {
    gap: 15,
  },
  section: {
    marginBottom: 30
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8
  },
  bannerItem: {
    width: 300,
    height: 170,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 15,
    position: "relative"
  },
  bannerContainer: {
    width: width - 30
  },
  bannerButton: {
    backgroundColor: "#e509",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 10,
    left: 15
  },
  bannerButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold"
  }
})