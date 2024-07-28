import styled from 'styled-components'

export const Ulistvideos = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  margin: 40px;
  margin-bottom: 20px;
  height: 20px;
`

export const SearchInputText = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#404040' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`

export const SearchIconContainer = styled.button`
  border: none;
  position: absolute;
  right: 1px;
  cursor: pointer;
  color: #999;
  padding: 9px;
  background-color: #e6e6e6;
`

export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideoImg = styled.img`
  width: 30%;
`
export const TrendingContainerFailure = styled.div`
  width: 80%;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#1a1a1a' : '#f7f7f7')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  overflow-y: auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  width: 40%;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
