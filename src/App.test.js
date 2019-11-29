import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('<App />', () => {
  const defaultClasses = 'kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--static kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed'
  const activeClasses = `${defaultClasses} kt-aside--minimize`
  const defaultClassesSplitted = defaultClasses.split(' ')
  const activeClassesSplitted = activeClasses.split(' ')

  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('contains the correct classes when Sidebar expanded', () => {
    const wrapper = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    // open as true renders the default classes for the button
    // open as true does not render the active classes for the button
    expect(defaultClassesSplitted.every(c => wrapper.hasClass(c))).toBe(true)
    expect(activeClassesSplitted.every(c => wrapper.hasClass(c))).toBe(false)
  })
})

