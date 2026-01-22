import React, { useEffect, useRef, useState } from 'react'
import { newCraftingBoard, addObjectToBoard, tick, removeObjectFromBoard, COOLDOWN } from '../crafting_logic/crafting_board'
import { allObjects, ValidObjectName } from '../crafting_logic/crafting_object'

export default function App() {
  const boardRef = useRef(newCraftingBoard())
  const [, setTickCount] = useState(0) // force updates when board mutates

  useEffect(() => {
    const id = setInterval(() => {
      tick(boardRef.current)
      setTickCount(c => c + 1)
    }, 250)
    return () => clearInterval(id)
  }, [])

  const handleAdd = (x: number, y: number, name: string) => {
    if (!name) return
    addObjectToBoard(boardRef.current, x, y, name as ValidObjectName)
    setTickCount(c => c + 1)
  }

  const handleRemove = (x: number, y: number) => {
    removeObjectFromBoard(boardRef.current, x, y)
    setTickCount(c => c + 1)
  }

  const { width, height, cells, cellCooldowns } = boardRef.current

  const objectNames = Object.keys(allObjects) as ValidObjectName[]

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Crafting Board</h1>
      <div style={{ display: 'grid', gap: 8, gridTemplateColumns: `repeat(${width}, 140px)` }}>
        {Array.from({ length: height }).map((_, row) =>
          Array.from({ length: width }).map((_, col) => {
            const idx = col + width * row
            const cell = cells[idx]
            return (
              <div key={`${col}-${row}`} style={{
                border: '1px solid #ccc',
                padding: 8,
                minHeight: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: ((): string => {
                  const ticksLeft = cellCooldowns[idx] ?? 0
                  const maxAlpha = 0.2
                  const alpha = COOLDOWN > 0 ? Math.min(maxAlpha, (ticksLeft / COOLDOWN) * maxAlpha) : 0
                  if (alpha > 0) return `linear-gradient(rgba(255,0,0,${alpha}), rgba(255,0,0,${alpha})), #fafafa`
                  return '#fafafa'
                })()
              }}>
                {cell === undefined ? (
                  <select defaultValue={""} onChange={e => handleAdd(col, row, e.target.value)}>
                    <option value="">(empty)</option>
                    {objectNames.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>{cell.name}</span>
                    <button onClick={() => handleRemove(col, row)} style={{ cursor: 'pointer' }}>x</button>
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
