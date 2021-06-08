export default function SecondPropElement({ propValue }) {
  function renderSomeDivs() {
    if (propValue % 2) {
      return <div>Test test</div>
    } else {
      return <div>Alio valio ir internetas</div>
    }
  }
  return <div>{renderSomeDivs()}</div>;
}
