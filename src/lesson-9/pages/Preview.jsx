import { useMemo } from 'react'
import { formKeys } from './formKeys'
import PropTypes from 'prop-types'

export default function Preview({ user }) {
  const parsedData = useMemo(
    () =>
      Object.keys(formKeys).map((key) => (
        <input key={key} readOnly value={user[key]} />
      )),
    [user]
  )
  return <div>{parsedData}</div>
}

Preview.propTypes = {
  user: PropTypes.object.isRequired,
}
