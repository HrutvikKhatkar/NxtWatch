// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
// import ContextComponent from '../../ContextComponents'
// import {
//   LogInPage,
//   LoginContainer,
//   Image,
//   FormContainer,
//   Input,
//   Label,
//   CheckBoxContainer,
//   CheckBox,
//   CheckboxLabel,
//   Button,
//   ErrMsg,
// } from './LoginContext'

// class Login extends Component {
//   state = {
//     username: '',
//     password: '',
//     showPassword: false,
//     showSubmitError: false,
//     errorMsg: '',
//   }

//   onChangeUsername = event => {
//     this.setState({
//       username: event.target.value,
//     })
//   }

//   onChangePassword = event => {
//     this.setState({
//       password: event.target.value,
//     })
//   }

//   onToggleShowPassword = () => {
//     this.setState(prevState => ({
//       showPassword: !prevState.showPassword,
//     }))
//   }

//   onSubmitSuccess = jwtToken => {
//     const {history} = this.props
//     Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
//     history.replace('/')
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

//   onSubmitData = async event => {
//     // event.preventDefault()
//     // const {username, password} = this.state
//     // const userDetails = {username, password}
//     // const url = 'https://apis.ccbp.in/login'
//     // const options = {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(userDetails),
//     // }

//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok) {
//       this.onSubmitSuccess(data.jwtToken)
//     } else {
//       this.onSubmitFailure(data.error)
//     }
//   }

//   // onSubmitData = async event => {
//   //   event.preventDefault()
//   //   const {username, password} = this.state
//   //   const userDetails = {username, password}
//   //   const url = 'https://nxtwatchbackend-sh20.onrender.com/login'
//   //   const options = {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify(userDetails),
//   //   }
//   //   const response = await fetch(url, options)
//   //   const data = await response.json()
//   //   console.log(response)
//   //   console.log(data)
//   //   if (response.ok === true) {
//   //     this.onSubmitSuccess(data.jwtToken)
//   //   } else {
//   //     this.onSubmitFailure(data.error_msg)
//   //   }
//   // }

//   render() {
//     const token = Cookies.get('jwt_token')
//     if (token !== undefined) {
//       return <Redirect to="/" />
//     }
//     return (
//       <ContextComponent.Consumer>
//         {value => {
//           const {isDarkTheme} = value
//           const {
//             username,
//             password,
//             showPassword,
//             showSubmitError,
//             errorMsg,
//           } = this.state
//           return (
//             <LogInPage isDarkTheme={isDarkTheme}>
//               <LoginContainer isDarkTheme={isDarkTheme}>
//                 <Image
//                   src={
//                     isDarkTheme
//                       ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
//                       : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
//                   }
//                   alt="website logo"
//                   data-testid="banner"
//                 />
//                 <FormContainer onSubmit={this.onSubmitData}>
//                   <Label isDarkTheme={isDarkTheme} htmlFor="username">
//                     Username
//                   </Label>
//                   <Input
//                     id="username"
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={this.onChangeUsername}
//                     isDarkTheme={isDarkTheme}
//                   />
//                   <Label isDarkTheme={isDarkTheme} htmlFor="password">
//                     Password
//                   </Label>
//                   <Input
//                     id="password"
//                     type={showPassword ? 'text' : 'password'}
//                     placeholder="Password"
//                     value={password}
//                     onChange={this.onChangePassword}
//                     isDarkTheme={isDarkTheme}
//                   />
//                   <CheckBoxContainer>
//                     <CheckBox
//                       type="checkbox"
//                       id="checkbox"
//                       checked={showPassword}
//                       onChange={this.onToggleShowPassword}
//                     />
//                     <CheckboxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
//                       Show Password
//                     </CheckboxLabel>
//                   </CheckBoxContainer>
//                   <Button type="submit">Login</Button>
//                   {showSubmitError ? <ErrMsg>*{errorMsg}</ErrMsg> : null}
//                 </FormContainer>
//               </LoginContainer>
//             </LogInPage>
//           )
//         }}
//       </ContextComponent.Consumer>
//     )
//   }
// }

// export default Login

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ContextComponent from '../../ContextComponents'
import {
  LogInPage,
  LoginContainer,
  Image,
  FormContainer,
  Input,
  Label,
  CheckBoxContainer,
  CheckBox,
  CheckboxLabel,
  Button,
  ErrMsg,
} from './LoginContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      this.onSubmitSuccess(jwtToken)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  // onSubmitData = async event => {
  //   event.preventDefault()
  //   const {username, password} = this.state
  //   const userDetails = {username, password}
  //   const url = 'https://nxtwatchbackend-sh20.onrender.com/login'
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userDetails),
  //   }
  //   const response = await fetch(url, options)
  //   const data = await response.json()
  //   console.log(response)
  //   console.log(data)
  //   if (response.ok === true) {
  //     const jwtToken = data.jwt_token
  //     this.onSubmitSuccess(jwtToken)
  //   } else {
  //     this.onSubmitFailure(data.error_msg)
  //   }
  // }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            username,
            password,
            showPassword,
            showSubmitError,
            errorMsg,
          } = this.state
          return (
            <LogInPage isDarkTheme={isDarkTheme}>
              <LoginContainer isDarkTheme={isDarkTheme}>
                <Image
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                  data-testid="banner"
                />
                <FormContainer onSubmit={this.onSubmitData}>
                  <Label isDarkTheme={isDarkTheme} htmlFor="username">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username rahul"
                    value={username}
                    onChange={this.onChangeUsername}
                    isDarkTheme={isDarkTheme}
                  />
                  <Label isDarkTheme={isDarkTheme} htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password rahul@2021"
                    value={password}
                    onChange={this.onChangePassword}
                    isDarkTheme={isDarkTheme}
                  />
                  <CheckBoxContainer>
                    <CheckBox
                      type="checkbox"
                      id="checkbox"
                      checked={showPassword}
                      onChange={this.onToggleShowPassword}
                    />
                    <CheckboxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckBoxContainer>
                  <Button type="submit">Login</Button>
                  {showSubmitError ? <ErrMsg>*{errorMsg}</ErrMsg> : null}
                </FormContainer>
              </LoginContainer>
            </LogInPage>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default Login
