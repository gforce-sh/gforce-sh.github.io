import styled from '@emotion/styled';

export const Text = styled.div`
  font-size: ${({ size }) => (size ? `${size}px` : '11px')};
  ${({ color }) => (color ? `color: ${color};` : null)}
  ${({ weight }) => (weight ? `font-weight: ${weight};` : null)};
  ${({ padding }) => (padding ? `padding: ${padding};` : null)};
  ${({ margin }) => (margin ? `margin: ${margin};` : null)};
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)};
  ${({ display }) => (display ? `display: ${display};` : null)};
`;
