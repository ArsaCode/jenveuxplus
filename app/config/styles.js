import { Platform } from 'react-native';

export default {
    colors: {
        primary: '#015D8D',
        primary2: '#222a66',
        primarylight: '#006ea8',
        secondary: '#414141',
        black: 'black',
        white: 'white',
        white2: '#cfcfd5',
        danger: '#c70707',
        success: '#32e119',
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir', 
    }
}
