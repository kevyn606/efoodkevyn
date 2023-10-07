import styled from 'styled-components'
import { cores } from './styles'

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${cores.laranja};
  padding: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    ul {
      display: flex;
      gap: 8px;
    }

    h4 {
      font-size: 10px;
      font-weight: 400px;
      text-align: center;
      padding-top: 48px;
    }
  }
`
