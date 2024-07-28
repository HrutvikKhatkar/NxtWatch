import styled from 'styled-components'

export const GamingPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#212121' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`
export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#1a1a1a' : '#f7f7f7')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  overflow-y: auto;
`
export const TrendingContainerFailure = styled(GamingContainer)`
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TrendingHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#333' : '#e3e3e3')};
  padding: 30px;
  padding-left: 50px;

  h1 {
    margin: 0 0 0 20px;
    font-size: 40px;
    font-weight: bold;
    color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  }
`

export const IconContainer = styled.div`
  background-color: #f0fcff;
  padding: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  svg {
    width: 35px;
    height: 35px;
    color: red;
  }
`

export const UlistGaming = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#1a1a1a' : '#f7f7f7')};
`

export const ListTrending = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: row;
  align-items: center;
  width: 90%;
`
export const GmaingImg = styled.img`
  width: 20%;
`
export const FailureImg = styled.img`
  width: 40%;
`
