import React from 'react';
import { Image } from 'react-native';

interface Props {
  uri: string
  width?: number | string
  height?: number | string
}

const Avatar: React.FC<Props> = ({ uri, width, height }) => <Image
  source={{ uri }}
  style={{ width: width || 48, height: height || 48, marginRight: 5, borderRadius: 100 }}
/>

export default Avatar;