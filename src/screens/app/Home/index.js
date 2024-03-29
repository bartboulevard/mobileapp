import React, {useState, useEffect, navigation} from "react";
import {View, Text, FlatList} from "react-native";
import { styles } from "./styles";
import Header from "../../../components/Header";
import {SafeAreaView} from "react-native-safe-area-context";
import { categories } from "../../../data/categories";
import {products} from "../../../data/products";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation()
    const [selectedCategory, setSelectedCategory] = useState()
    const [keyword, setKeyword] = useState()
    const [selectedProducts, setSelectedProducts] = useState(products)

    console.log('keyword, => ', keyword)

    useEffect(() => {
        if(selectedCategory && !keyword){
        const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory)
        setSelectedProducts(updatedSelectedProducts)
        } else if(selectedCategory && keyword){
            const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory && product?.title.toLowerCase().includes(keyword.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
        } else if(!selectedCategory && keyword){
            const updatedSelectedProducts = products.filter((product) => product?.title.toLowerCase().includes(keyword.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
        } else if(!keyword && !selectedCategory){
            setSelectedProducts(products)

        }
    }, [selectedCategory, keyword])

    const renderCategoryItem = ({item, index}) => {
        console.log('item => ', item)
        return (
            <CategoryBox
            onPress={() => setSelectedCategory(item?.id)}
            isSelected={item.id === selectedCategory}
            title={item?.title} 
            image={item?.image}
            />
        )
    }

    const renderProductItem = ({item}) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', {product})
        }
        console.log('item => ', item)
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item}/>
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Header showSearch={true} onSearchKeyword={setKeyword} keyword={keyword} title="Find All You Need, Robin Noormets" />
            <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)} />
            <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 250}}/>} />
        </View>
        </SafeAreaView>
    )
}
export default Home;