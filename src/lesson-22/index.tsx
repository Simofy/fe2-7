type Lesson22Type = {
  onClick: () => void
  loading: boolean
  incrementCount: number
  userId: string
}

export default function Lesson22(props: Lesson22Type) {
  const { incrementCount } = props
  console.log(incrementCount)
  return <div />
}
