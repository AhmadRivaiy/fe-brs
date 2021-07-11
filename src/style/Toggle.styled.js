
import styled from 'styled-components';
export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggleGradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: ${({ theme }) => theme.toggleBorderRadius};
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.3rem;
  position: relative;
  width: 6rem;
  height: 2rem;

  svg {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;
    
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(60px)'};
    }
    
  }
`;