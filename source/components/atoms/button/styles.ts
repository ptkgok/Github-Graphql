import styled from 'styled-components/native';



export const Container = styled.TouchableOpacity`
  background: #000000;
  border-radius: 100px;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "40px"};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`