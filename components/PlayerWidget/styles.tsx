import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
    image:{
        width: 75, 
        height: 75, 
        borderRadius: 6, 
        marginRight: 10, 
    }, 
    

    title:{
        color: 'white', 
        fontSize: 12,
        marginVertical: 10, 
        fontWeight: 'bold'
    }, 

    artist:{
        color: 'lightgray', 
        fontSize: 12, 
        marginLeft: 20
    }, 

    container:{
        position: 'absolute', 
        bottom: 77, 
        flexDirection: 'column', 
        backgroundColor: '#131313', 
        width: '100%', 
        borderWidth: 1, 
        borderColor: 'black', 
        
    }, 

    rightContainer:{
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',  
       }, 
    
    buttonContainer:{
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        width: 100, 
        left: 100, 
        paddingRight: 20 
    }, 

    row:{
        flexDirection: 'row', 
        justifyContent: 'space-around'

    }, 

    progress:{
        height: 4, 
        backgroundColor: '#1CD05D', 
    }

})

export default styles;