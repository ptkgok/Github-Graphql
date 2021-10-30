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

export const GridRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${(props: Props) => props.justify || 'center'};
  align-items: ${(props: Props) => props.align || 'flex-start'};

  margin: ${(props: Props) => props.margin || 0};
  padding: ${(props: Props) => props.padding || 0};
`

export const GridColumn = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: ${(props: Props) => props.justify || 'center'};
  align-items: ${(props: Props) => props.align || 'flex-start'};

  margin: ${(props: Props) => props.margin || 0};
  padding: ${(props: Props) => props.padding || 0};
`