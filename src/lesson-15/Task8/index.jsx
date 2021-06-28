import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import './Task8.scss'

// {
//   "_id": "60be0aa75907326b24fcf7a6",
//   "message": "141",
//   "createdAt": "2021-06-07T12:01:43.773Z",
//   "name": "4141"
// },

// {"message":"messageValue","name":"userName"}

const MessagesContext = createContext({
  messages: [],
  username: '',
  setUsername() {},
})

const postMessage = async (name, message) => {
  try {
    await fetch('https://simutis.dev/api/messages', {
      method: 'POST',
      body: JSON.stringify({ name, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (e) {
    console.error(e)
  }
}

function SendMessage() {
  const { setUsername, username } = useContext(MessagesContext)

  const handleOnSubmit = useCallback((e) => {
    e.preventDefault()
    const { target } = e
    const messageInput = target['message']
    const usernameInput = target['username']
    if (!usernameInput.value) {
      alert('Please write your name')
      return
    }
    if (!messageInput.value) {
      alert('Please write your message')
      return
    }
    setUsername(usernameInput.value)
    postMessage(usernameInput.value, messageInput.value)
    messageInput.value = ''
  }, [])

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Name
        <input name="username" disabled={!!username} />
      </label>
      <label>
        Message
        <input name="message" />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

// eslint-disable-next-line react/prop-types
function Message({ message: { message, createdAt, name } }) {
  const parsedDate = useMemo(() => {
    return new Date(createdAt).toLocaleString('en-GB', {
      hour12: false,
    })
  }, [createdAt])
  return (
    <div className="message">
      <div className="message-name">{name}</div>
      <div className="message-message">{message}</div>
      <div className="message-created">{parsedDate}</div>
    </div>
  )
}

function Messages() {
  const { messages } = useContext(MessagesContext)
  const messagesList = useMemo(
    () =>
      messages
        .map(({ _id: id, ...message }) => (
          <Message key={id} message={message} />
        ))
        .reverse(),
    [messages]
  )
  const messagesRef = useRef(null)
  useEffect(() => {
    const { current } = messagesRef
    if (current) {
      current.scrollTo(0, current.scrollHeight)
    }
  }, [messagesRef.current])
  return (
    <div ref={messagesRef} className="messages-container">
      {messagesList}
    </div>
  )
}

export default function Task8() {
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://simutis.dev/api/messages')
        .then((response) => response.json())
        .then(setMessages)
    }, 200)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <MessagesContext.Provider
      value={{
        messages,
        username,
        setUsername,
      }}
    >
      <div className="task-8-container">
        <Messages />
        <SendMessage />
      </div>
    </MessagesContext.Provider>
  )
}
