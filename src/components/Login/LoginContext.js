import styled from 'styled-components'

export const LogInPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#333333' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`

export const LoginContainer = styled.div`
  box-shadow: ${({isDarkTheme}) =>
    isDarkTheme ? null : '5px 5px 5px 5px gray'};
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  max-width: 450px;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#121212' : '#ffffff')};

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 15px;
  }
`

export const Image = styled.img`
  width: 40%;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    width: 60%;
  }
`

export const FormContainer = styled.form`
  width: 80%;

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 10px;
  border: 1px solid ${isDarkTheme => (isDarkTheme ? '#9c9c9c' : 'gray')};
  border-radius: 3px;
  margin-bottom: 20px;
  font-size: 15px;
  background-color: ${({isDarkTheme}) =>
    isDarkTheme ? 'transparent' : '#ffffff'};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`

export const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#e8e6e6' : 'gray')};
  margin-bottom: 5px;
  display: block;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckBox = styled.input``

export const CheckboxLabel = styled(Label)`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#bababa' : '#000000')};
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  align-self: stretch;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 0px;
  width: 100%;
`

export const ErrMsg = styled.p`
  color: red;
  font-size: 13px;
  margin: 0px;
  margin-bottom: 20px;
  padding: 0px;
  font-weight: 500;
`
