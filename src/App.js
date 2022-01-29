import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import { Transition, animated } from 'react-spring'

import './app.css'

export default () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
              <Routes>
        {({ routePath, getComponentForPath }) => {
          // Using the routePath as the key, both routes will render at the same time for the transition
          return (
            <Transition
              native
              items={routePath}
              from={{ transform: 'translateY(100px)', opacity: 0 }}
              enter={{ transform: 'translateY(0px)', opacity: 1 }}
              leave={{ transform: 'translateY(100px)', opacity: 0 }}
            >
              {item => props => {
                const Comp = getComponentForPath(item)
                return (
                  <animated.div style={props}>
                    <Comp />
                  </animated.div>
                )
              }}
            </Transition>
          )
        }}
      </Routes>
      </div>
    </div>
  </Router>
)
