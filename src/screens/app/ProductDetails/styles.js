import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '/Users/student/MobileApp/utils/colors.js';

const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: height * 0.45
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500'
    },
    description: {
        color: colors.textGray,
        fontWeight: '500',
        marginVertical: 8
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 75,
        justifyContent: 'space-between',
        flex: 1,
    },
    save: {
        flex: 1
    },
    bookmarkContainer: {
        backgroundColor: colors.lightGray,
        padding: 18,
        borderRadius: 8,
        marginRight: 16
    },
    bookmarkIcon: {
        width: 24,
        height: 24
    },
    backContainer: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 24,
        borderRadius: 8,
        position: 'absolute',
    },
    backIcon: {
        width: 20,
        height: 20
    }
});