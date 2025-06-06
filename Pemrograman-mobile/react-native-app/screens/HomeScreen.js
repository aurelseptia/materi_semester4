
    import React, { useState } from 'react';
    import {
      View,
      Text,
      StyleSheet,
      FlatList,
      Image,
      TouchableOpacity,
      ScrollView,
    } from 'react-native';

    const allProducts = [
      {
        id: '1',
        name: 'Petualang Hebat Si MOIS',
        price: 'Rp 150.000',
        category: 'Petualangan',
        image: 'https://pendidikan.id/news/wp-content/uploads/2017/08/komik.mois-resize.jpg',
      },
      {
        id: '2',
        name: 'Komik Sains Kuark',
        price: 'Rp 100.000',
        category: 'Sains',
        image: 'https://bukukita.com/babacms/displaybuku/24350_f.jpg',
      },
      {
        id: '3',
        name: 'Komik Si Juki Anak Kosan',
        price: 'Rp 50.000',
        category: 'Lucu',
        image: 'https://cdn.gramedia.com/uploads/items/716010920_si_juki_-_lika-liku_anak_kos.jpg',
      },
      {
        id: '4',
        name: 'Doraemon Petualangan',
        price: 'Rp 70.000',
        category: 'Petualangan',
        image: 'https://inc.mizanstore.com/aassets/img/com_cart/produk/GRK-087.jpg',
      },
      {
        id: '5',
        name: 'Komik Naruto',
        price: 'Rp 85.000',
        category: 'Petualangan',
        image: 'https://upload.wikimedia.org/wikipedia/id/9/94/NarutoCoverTankobon1.jpg',
      },
      {
        id: '6',
        name: 'Komik One Piece',
        price: 'Rp 90.000',
        category: 'Petualangan',
        image: 'https://onepieceberwarna.com/komik/ATS/VOL%20108/1090/01.jpg',
      },
      {
        id: '7',
        name: 'Komik Sains Astrofisika',
        price: 'Rp 110.000',
        category: 'Sains',
        image: 'https://down-id.img.susercontent.com/file/id-11134207-7r992-lxgv6c85wzz296',
      },
      {
        id: '8',
        name: 'Petualangan di Hutan',
        price: 'Rp 120.000',
        category: 'Petualangan',
        image: 'https://inc.mizanstore.com/aassets/img/com_cart/produk/kkpkpetualangan-di-hutan-mangrove.jpg',
      },
      {
        id: '9',
        name: 'Komik Lucu Si Bebek',
        price: 'Rp 45.000',
        category: 'Lucu',
        image: 'https://down-id.img.susercontent.com/file/sg-11134201-23010-1bdc2uyrsomv9f',
      },
      {
        id: '10',
        name: 'Sains untuk Anak',
        price: 'Rp 95.000',
        category: 'Sains',
        image: 'https://cdn.gramedia.com/uploads/items/9786230305450_CSI_03.jpg',
      },
      {
        id: '11',
        name: 'Petualangan di Laut',
        price: 'Rp 130.000',
        category: 'Petualangan',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4W_GhULkDPpYx4QjJcMIiwrYC8UHAMcv0Q&s',
      },
      {
        id: '12',
        name: 'Komik Sains Biologi',
        price: 'Rp 105.000',
        category: 'Sains',
        image: 'https://pts.com.my/assets/book_cover/_cover/kaver_biologi.jpg',
      },
      {
        id: '13',
        name: 'Si Juki Lagi',
        price: 'Rp 55.000',
        category: 'Lucu',
        image: 'https://i.ytimg.com/vi/fWmB3acKpHE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDi70o69IXvczrKyXGkeR3Z3kimhQ',
      },
      {
        id: '14',
        name: 'Petualangan di Gunung',
        price: 'Rp 140.000',
        category: 'Petualangan',
        image: 'https://upload.wikimedia.org/wikipedia/id/6/6e/20_Tintin_Di_Tibet.jpg',
      },
      {
        id: '15',
        name: 'Komik Sains Fisika',
        price: 'Rp 115.000',
        category: 'Sains',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjp_rOf-LIF2mCMiLqQLHYiyyEMlMynEXA&s',
      },
      {
        id: '16',
        name: 'Komik Lucu Anak Kampus',
        price: 'Rp 60.000',
        category: 'Lucu',
        image: 'https://cdn-brilio-net.akamaized.net/news/2018/12/21/156701/965752-1000xauto-komik-anak-sekolah.jpg',
      },
      {
        id: '17',
        name: 'Petualangan di Gurun',
        price: 'Rp 135.000',
        category: 'Petualangan',
        image: 'https://tirtabuanamedia.co.id/wp-content/uploads/2024/10/Petualangan-Ilmiah-Naufal-dan-Syafa-Menjelajah-Gurun-Pasir.png',
      },
      {
        id: '18',
        name: 'Komik Sains Kimia',
        price: 'Rp 120.000',
        category: 'Sains',
        image: 'https://media.mncgramedia.id/images/books/5558/The_Yummy_Science_01_1678953207.jpg',
      },
      {
        id: '19',
        name: 'Si Juki Lagi Seru',
        price: 'Rp 65.000',
        category: 'Lucu',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv20VWz-BHqQL5gpy5fRi0bY5TTH93BewqzA&s',
      },
      {
        id: '20',
        name: 'Petualangan di Pulau',
        price: 'Rp 145.000',
        category: 'Petualangan',
        image: 'https://online.anyflip.com/vxykj/bjzd/files/thumb/8.jpg',
      },
    ];

    const categories = ['Semua', 'Petualangan', 'Sains', 'Lucu'];

    export default function HomeScreen({ navigation }) {
      const [selectedCategory, setSelectedCategory] = useState('Semua');

      const filteredProducts =
        selectedCategory === 'Semua'
          ? allProducts
          : allProducts.filter((p) => p.category === selectedCategory);

      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Selamat Datang di TOKO KOMIK!</Text>

          <View style={styles.categoryContainer}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryBox,
                  selectedCategory === cat && styles.categoryBoxActive,
                ]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === cat && styles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.subtitle}>Komik Kategori: {selectedCategory}</Text>

          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            numColumns={5} // buat grid 2 kolom
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => navigation.navigate('DetailScreen', { product: item })}
              >
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      );
    }

    const styles = StyleSheet.create({
      container: {
        padding: 20,
        paddingBottom: 60,
        flexGrow: 1,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
      },
      subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 15,
        color: '#0a84ff',
      },
      categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      categoryBox: {
        backgroundColor: '#f0f4f7',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginRight: 10,
      },
      categoryBoxActive: {
        backgroundColor: '#0a84ff',
      },
      categoryText: {
        fontWeight: '600',
        color: '#555',
      },
      categoryTextActive: {
        color: '#fff',
      },
      productCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 8,
        flex: 1, // supaya fleksibel di grid
        maxWidth: '47%', // agar 2 kolom dengan jarak
        elevation: 3,
      },
      productImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
        backgroundColor: '#ccc',
      },
      productName: {
        marginTop: 10,
        fontWeight: '600',
        color: '#333',
      },
      productPrice: {
        color: 'green',
        marginTop: 5,
        fontWeight: '500',
      },
      gradient: {
        flex: 1,
      },
      
      container: {
        padding: 20,
        paddingBottom: 60,
        flexGrow: 1,
      },
      
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#fff',
        textAlign: 'center',
      },
      
      subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 15,
        color: '#fff',
      },
      
      categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
        justifyContent: 'center',
      },
      
      categoryBox: {
        backgroundColor: '#ffffff80',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        margin: 5,
      },
      
      categoryBoxActive: {
        backgroundColor: '#6c63ff',
      },
      
      categoryText: {
        fontWeight: '600',
        color: '#333',
      },
      
      categoryTextActive: {
        color: '#fff',
      },
      
      productCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        marginBottom: 15,
        flex: 1,
        margin: 5,
        elevation: 5,
      },
      
      productImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
        backgroundColor: '#ccc',
      },
      
      productName: {
        marginTop: 10,
        fontWeight: '600',
        color: '#333',
      },
      
      productPrice: {
        color: '#6c63ff',
        marginTop: 5,
        fontWeight: '500',
      },
      
    });
