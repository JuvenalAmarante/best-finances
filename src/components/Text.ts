import { styled } from 'styled-components/native';

interface TextProps {
  weight?: 'regular' | 'semibold' | 'bold';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color || '#333'};
  font-family: ${({ weight }) => `GeneralSans-${weight || 'regular'}`};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  opacity: ${({ opacity }) => opacity || 1};
`;
