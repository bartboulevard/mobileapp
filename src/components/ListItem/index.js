import React from "react";
import {View, Text, Image, Pressable} from "react-native";

import { styles } from "./styles";

const ListItem = ({title, subtitle, onPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {!! subtitle ? (<Text style={styles.subtitle}>{subtitle}</Text>) : null }
        </View>
        <Image style={styles.arrow} source={require("../../assets/arrow.png")} />
        </Pressable>
    )
}
export default ListItem;