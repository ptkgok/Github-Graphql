import styled from 'styled-components/native';

interface Props {
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  padding?: number | string;
  backgroundColor?: string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  borderColor?: string;
  boxShadow?: string;

  justify?: string;
  align?: string;
}

export const Title = styled.Text<Props>`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
  margin: ${props => props.margin || 0};
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #7E7E7E;
  margin: ${props => props.margin || 0};
`