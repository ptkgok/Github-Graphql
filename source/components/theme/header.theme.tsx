import React from 'react'
import Button from "../../components/atoms/button"
import { Image } from "react-native"
import Logo from '../../assets/github_logo.png'
import { useNavigation } from '@react-navigation/core'

const HeaderTheme = () => {


  return {
    title: '',
    headerLeft: () => <Image source={Logo} style={{ width: 98.92, height: 40 }
    } />,
    headerRight: () => {
      const navigation = useNavigation()
      return (
        <Button width="154px" height="32px" children="Adicionar novo" onPress={() => navigation.navigate('AddUser')} />
      )
    },
    headerShadowVisible: false
  }
}
export { HeaderTheme }