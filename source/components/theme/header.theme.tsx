import React, { useContext } from 'react'
import Button from "../../components/atoms/button"
import { Image, TouchableOpacity } from "react-native"
import Logo from '../../assets/github_logo.png'
import { ArrowBackIcon } from '../../assets/icons'
import Avatar from '../../components/atoms/avatar'
import { useNavigation } from '@react-navigation/core'
import { AuthenticatedContext } from '../../infra/context/authenticated'

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

const HeaderAuthenticatedTheme = () => {
  return {
    title: '',
    headerLeft: () => {
      const navigation = useNavigation()
      return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ArrowBackIcon} width={32} height={32} />
        </TouchableOpacity>
      )
    },
    headerRight: () => {
      const { user } = useContext(AuthenticatedContext)
      return <Avatar uri={user?.avatarUrl} width={32} height={32} />
    },
    headerShadowVisible: false
  }
}

export { HeaderTheme, HeaderAuthenticatedTheme }