import styled from 'styled-components'

export const Homepage = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#212121' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`

export const NavSection = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#212121' : '#ffffff')};
`
export const NavHeaderSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const NavFooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const ContactLogo = styled.img`
  width: 14%;
  margin-left: 10px;
  margin-right: 10px;
`
export const Ulist = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px 35px;
  margin: 0;
  transition: background-color 0.3s, color 0.3s;
  font-size: 22px;
  background-color: ${({active, isDarkTheme}) => {
    if (active) {
      if (isDarkTheme) return '#424242'
      return '#e0e0e0'
    }
    return 'transparent'
  }};
  color: ${({active, isDarkTheme}) => {
    if (active) {
      if (isDarkTheme) return '#ffffff'
      return '#000000'
    }
    return 'inherit'
  }};

  &:hover {
    background-color: ${({isDarkTheme}) =>
      isDarkTheme ? '#5c5c5c' : '#f0f0f0'};
  }

  &:hover svg {
    color: red;
    font-size: 25px;
  }
`

export const NavButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    transition: color 0.3s;
  }
`
