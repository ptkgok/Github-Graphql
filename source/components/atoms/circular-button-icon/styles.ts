import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${(props: {active: boolean}) =>
    props.active ? 'rgba(255, 199, 0, 0.16)' : '#E8E8E8'};
  border-radius: 100px;
  padding: 5px;
`;
