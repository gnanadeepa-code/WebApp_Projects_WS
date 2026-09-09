import React from 'react'

const Content = () => {
    function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const num = Math.floor(Math.random() * 3);
    return names[num];
  }
  return (
    <div>
         <p>Let's {handleNameChange()} Money</p>
    </div>
  )
}

export default Content