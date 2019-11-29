import React from 'react'
import Sidebar from './Sidebar'
import { render, shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'

describe('<Sidebar />', () => {
  const id = '#kt_aside_toggler'
  const defaultClasses = 'kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left'
  const activeClasses = `${defaultClasses} kt-aside__brand-aside-toggler--active`
  const defaultClassesSplitted = defaultClasses.split(' ')
  const activeClassesSplitted = activeClasses.split(' ')

  it('renders without crashing', () => {
    shallow(<Sidebar />)
  })

  it('is only one button to toggle the sidebar', () => {
    const wrapper = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    )

    const button = wrapper.find(id)

    // There is only one button to toggle the Sidebar
    expect(button.length).toEqual(1)
  })

  it('contains the correct classes when expanded', () => {
    const wrapper = render(
      <BrowserRouter>
        <Sidebar open={true} />
      </BrowserRouter>
    )

    const button = wrapper.find(id)

    // open as true renders the default classes for the button
    // open as true does not render the active classes for the button
    expect(defaultClassesSplitted.every(c => button.hasClass(c))).toBe(true)
    expect(activeClassesSplitted.every(c => button.hasClass(c))).toBe(false)
  })

  it('contains the correct classes when shrunk', () => {
    const wrapper = render(
      <BrowserRouter>
        <Sidebar open={false} />
      </BrowserRouter>
    )

    const button = wrapper.find(id)

    // open as false renders the active classes for the button
    // implicit it renders the default classes, but those already in the active
    // classes
    expect(activeClassesSplitted.every(c => button.hasClass(c))).toBe(true)
  })
})
