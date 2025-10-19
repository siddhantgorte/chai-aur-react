import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

function MyApp() {
  return (
  <div>
    <h1>custom app !</h1>
  </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
  reactElement
)
