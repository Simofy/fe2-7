import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import shortid from 'shortid'
import { randomHexColor } from '../../helpers'
import './main.scss'

const gameStates = {
  init: 'INIT',
  paused: 'PAUSED',
  playing: 'PLAYING',
  dead: 'DEAD',
}

const enemyStatus = {
  alive: 'ALIVE',
  dead: 'DEAD',
}

const GameContext = createContext({
  gameState: gameStates.init,
  health: 3,
  updated: 0,
  killEnemy: (enemyId) => {},
  width: 0,
  height: 0,
})

function Enemy({ id, position, color, status, size }) {
  const { x, y } = position
  const { width, height, killEnemy } = useContext(GameContext)
  return (
    <div
      onClick={() => killEnemy(id)}
      style={{
        background: color,
        left: width * x - size,
        top: height * y - size,
        width: size,
        height: size,
      }}
      className="game-enemy"
    ></div>
  )
}

function Player() {}

export default function Game() {
  const [updated, setUpdated] = useState(0)
  const [enemies, setEnemies] = useState([])
  const killEnemy = useCallback(
    (enemyId) =>
      setEnemies((oldEnemies) => {
        const index = oldEnemies.findIndex(({ id }) => id === enemyId)
        if (index >= 0) {
          oldEnemies.splice(index, 1)
          return [...oldEnemies]
        }
        return oldEnemies
      }),
    []
  )
  const createEnemy = useCallback(
    (enemy) => setEnemies((oldEnemies) => [...oldEnemies, enemy]),
    []
  )
  useEffect(() => {
    for (let i = 0; i < 10; i += 1) {
      createEnemy({
        position: {
          y: Math.random(),
          x: 1,
        },
        id: shortid(),
        speed: 0.001 + Math.random() * 0.005,
        status: enemyStatus.alive,
        color: randomHexColor(),
        size: Math.floor(20 + Math.random() * 200),
      })
    }
  }, [])
  const enemiesList = useMemo(
    () => enemies.map((enemy) => <Enemy key={enemy.id} {...enemy} />),
    [enemies.length || enemies]
  )
  const gameRef = useRef(null)
  const width = gameRef?.current?.clientWidth ?? 0
  const height = gameRef?.current?.clientHeight ?? 0

  useEffect(() => {
    let requestId = 0
    function renderer() {
      enemies.forEach((enemy) => {
        const { position, speed } = enemy
        enemy.position.x = position.x - speed
      })
      setUpdated((oldUpdate) => oldUpdate + 1)
    }
    requestId = window.requestAnimationFrame(renderer)
    return () => {
      window.cancelAnimationFrame(requestId)
    }
  }, [enemies, updated])
  return (
    <GameContext.Provider
      value={{
        updated,
        killEnemy,
        width,
        height,
      }}
    >
      <div ref={gameRef} className="game-container">
        {enemiesList}
      </div>
    </GameContext.Provider>
  )
}
