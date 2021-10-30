import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  justify-content: flex-start;
  align-items: center;
`


export const Avatar = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background: #e5e5e5;
  margin-right: 8px;
  position: absolute;
  left: 16px;
`

export const Field = styled.TextInput`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  padding-left: 16px;
  font-size: 16px;
  line-height: 19px;
`;
