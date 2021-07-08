type Lesson22Type = {
  onClick: () => void
  loading: boolean
  incrementCount: number
  // ? means its not required
  userId?: string
  favoriteMovies: {
    name: string
    favoriteId: string
  }[]
  testObject: {
    test: number
    testNumber: number
    [key: string]: number
  }
  array: {
    [key: string]: unknown
  }[]
  testArray?: Array<{
    name: string
    favoriteId: string
  }>
}

enum APIUrl {
  getMessages = '/messages',
  getList = '/list',
  getFavorites = '/favorites',
}

type ResponseType = {
  [APIUrl.getFavorites]: {
    favoriteId?: string
    name?: string
  }[]
  [APIUrl.getList]: {
    price?: number
  }[]
  [APIUrl.getMessages]: {
    message?: string
    name?: string
    messageId?: string
  }[]
}

type paramsType = {
  [APIUrl.getFavorites]: {
    userId: string
  }
  [APIUrl.getList]: {
    categoryId: string
  }
  [APIUrl.getMessages]: {
    messageId: string
  }
}

function handleAPI<T extends APIUrl>(
  url: T,
  params: paramsType[T]
): ResponseType[T] {
  // fetch()
  switch (url) {
    case APIUrl.getFavorites:
      return [
        {
          favoriteId: 'id',
          name: 'asd',
        },
      ]
    case APIUrl.getList:
      return [
        {
          price: 1243,
        },
      ]
    case APIUrl.getMessages:
      return [
        {
          message: 'asd',
          name: 'asd',
          messageId: 'asd',
        },
      ]
    default:
      return []
  }
}

export default function Lesson22(props: Lesson22Type) {
  const { incrementCount, favoriteMovies } = props
  console.log(favoriteMovies[0])
  console.log(incrementCount)
  return <div />
}
