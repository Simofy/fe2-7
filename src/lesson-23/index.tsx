enum OperationTypes {
  minus = 10,
  plus,
}

console.log(
  OperationTypes[10],
  OperationTypes[OperationTypes.minus],
  OperationTypes.minus,
  OperationTypes['minus']
)

console.log(Object.keys(OperationTypes), Object.values(OperationTypes))

function sumAllNumbers(operation: '-' | '+', ...numbers: number[]) {
  let totalValue = 0
  if (operation === '+') {
    numbers.forEach((number) => (totalValue += number))
  }
  if (operation === '-') {
    numbers.forEach((number) => (totalValue -= number))
  }
  return totalValue
}

export default function Lesson23() {
  const value1 = sumAllNumbers('-', 10, 2, 10, -10, 100, 50, 8)
  const value2 = sumAllNumbers('+', 10, 2, 10, -10, 100, 50, 8)
  return (
    <div>
      {value1}|{value2}
    </div>
  )
}
