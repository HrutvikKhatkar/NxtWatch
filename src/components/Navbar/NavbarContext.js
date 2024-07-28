import styled from 'styled-components'

export const GlobalStyles = styled.div`
  .popup-overlay {
    background: rgba(
      0,
      0,
      0,
      0.5
    ); // Ensure the overlay covers the entire screen
  }

  .popup-content {
    width: 250px !important; // Force the width of the popup content
    padding: 0px !important; // Remove default padding
    box-sizing: border-box; // Ensure padding and border are included in width
    border-radius: 8px; // Same border-radius as PopUpContainer
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#212121' : '#ffffff')};
`
export const NavLogo = styled.img`
  width: 10%;
`
export const RightSection = styled.div`
  width: 18%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const Image = styled.img`
  width: 12%;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: 20px;
`
export const ThemeButtonDark = styled(ThemeButton)`
  color: #ffffff;
`
export const LogoutButton = styled.button`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  border: 1px solid ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  padding: 3px;
  font-size: 14px;
  cursor: pointer;
  width: 65px;
  margin-left: 5px;
`
export const Button = styled.button`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  border: 1px solid ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  padding: 3px;
  font-size: 14px;
  cursor: pointer;
  width: 65px;
  margin: 20px;
`

// export const LogoutContainer = styled.div`
//     width:300px;
// `

export const PopUpContainer = styled.div`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#212121' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`
export const ButtonContainer = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
