import React from 'react'
import Button from "../../components/atoms/button"
import { Image } from "react-native"
import Logo from '../../assets/github_logo.png'

const HeaderTheme = () => {
  return {
    title: '',
    headerLeft: () => <Image source={Logo} style={{ width: 98.92, height: 40 }
    } />,
    headerRight: () => <Button width="154px" height="32px" children="Adicionar novo" />,
    headerShadowVisible: false
  }
}
export { HeaderTheme }