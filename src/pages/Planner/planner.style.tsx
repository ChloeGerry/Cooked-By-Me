import styled from 'styled-components';
import {
  fontSizeSmall,
  fontSizeMedium,
  secondaryColor,
} from '../../style/variables';

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  padding-right: 16px;
  font-size: ${fontSizeMedium};
`;

export const Input = styled.input`
  border: 1px solid ${secondaryColor};
  border-radius: 5px;
  font-size: ${fontSizeSmall};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 64px auto;
`;
