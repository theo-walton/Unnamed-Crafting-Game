import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Hello, world! — React + TypeScript + Electron + Bun</h1>
      <p>Platform: {window?.electron?.platform ?? 'unknown'}</p>
    </div>
  )
}
