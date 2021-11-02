import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 160px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 32px 16px;
  align-items: center;
  justify-content: space-between;
`;

export const Informations = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7E7E7E;
  margin-left: 4px;
  overflow: hidden;
  flex-shrink: 1;
`

export const Name = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 10px;
`
export const Username = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`
