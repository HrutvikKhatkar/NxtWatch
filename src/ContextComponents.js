import React from 'react'

const ContextComponent = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideo: [],
  onToggleSaved: () => {},
})

export default ContextComponent
