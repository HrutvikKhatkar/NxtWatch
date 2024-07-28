import styled from 'styled-components'

export const Homepage = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`

export const ContentSection = styled.div`
  width: 80%;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#1a1a1a' : '#f7f7f7')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  overflow-y: auto;
`
export const AddContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 250px;
  padding: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
export const CloseAddButton = styled.button`
  background-color: transparent;
  border: none;
`
export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
`
export const BuyPremiumPara = styled.p`
  color: #000000;
`
export const BannerLogo = styled.img`
  width: 50%;
`
export const GetItButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  align-self: flex-start;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
`
