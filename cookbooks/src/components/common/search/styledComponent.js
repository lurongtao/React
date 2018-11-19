import styled from 'styled-components'
import Border from 'components/styled/border'

const Search = styled.div `
  height: 66px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchContent = Border({
  component: styled.div `
    height: 40px;
    width: 100%;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ props => props.background || '' };
    img {
      width: 16px;
      height: 16px;
      margin-right: 2px;
    }
    span {
      color: #999;
    }
  `,
  width: props => !props.background ? '1px' : '0px',
  color: '#ee7530',
  radius: 6
})

export {
  Search,
  SearchContent,
}