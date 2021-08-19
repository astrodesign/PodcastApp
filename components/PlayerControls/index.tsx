import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {AntDesign, FontAwesome, EvilIcons, Ionicons, Feather} from '@expo/vector-icons'




const PlayerControls = () => {
    //this is where you'll add the useState and useEffect controls to make the controls function. 


    return (
        <View style={styles.playerIcons}>
            <TouchableOpacity>
            <Ionicons name='shuffle' size={30} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name='stepbackward' size={35} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name='play' size={50} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name='stepforward' size={30} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons name='ios-repeat' size={30} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

export default PlayerControls

const styles = StyleSheet.create({
    playerIcons:{ 
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center", 
    width: '100%'
    }
})
