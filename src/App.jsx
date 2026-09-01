import React from 'react'
import Section1 from './Components/Section 1/Section1'
import Section2 from './Components/Section 2/Section2'

const users= [
  {
    img:'https://images.unsplash.com/photo-1712282244289-aa73c99f7ee8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8NHx8fDA%3D',
    intro:'', 
    tag:'Satisfied'
  },

  {
    img:'https://images.unsplash.com/photo-1661983228411-177afaa8f01c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8NHx8fDA%3D',
    intro:'', 
    tag:'Underserved'
  },
  {
    img:'https://images.unsplash.com/photo-1650765815206-2884e7d31cab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDR8fHww',
    intro:'', 
    tag:'Underbanked'
  },
  {
    img:'https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDR8fHww',
    intro:'', 
    tag:'Underbanked'
  }
]
const App = () => {
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
