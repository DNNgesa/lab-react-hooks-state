import React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {

  return (
    <button onClick={onToggle} style={{ cursor: 'pointer' }}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
