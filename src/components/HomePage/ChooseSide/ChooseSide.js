import PropTypes from 'prop-types'
import styles from './ChooseSide.module.css'

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from '@context/ThemeProvider'

const ChooseSide = () => {
  const isTheme = useTheme()

  return (
    <>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEME_NEUTRAL)}>Neutral</button>
    </>
  )
}

ChooseSide.propTypes = {
  //   propName: PropTypes.string,
}

export default ChooseSide
