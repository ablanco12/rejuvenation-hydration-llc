import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <p>Rejuvenataion Hydration LLC, Copyright © {currentYear}</p>
  )
}

export default Footer