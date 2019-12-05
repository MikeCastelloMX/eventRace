import React from 'react'

const Context = React.createContext({
  value: true,
  toggle: () => {},
})

const useContext = () => React.useContext(Context)

export default Context
export {
  useContext,
}
