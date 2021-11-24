import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  min-height: 160px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 16px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;

  color: #000000;
`;

export const Informations = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7e7e7e;
  margin-left: 4px;
`;

export const Tags = styled.View`
  background: rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  padding: 5px;
  margin-right: 5px;
`;
export const ButtonStar = styled.TouchableOpacity`
  background: ${props =>
    props.active ? 'rgba(255, 199, 0, 0.16)' : '#F5F5F5'};
  border-radius: 100px;
  padding: 5px;
`;
