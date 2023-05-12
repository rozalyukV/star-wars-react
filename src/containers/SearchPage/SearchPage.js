import { useState } from 'react'
import PropTypes from 'prop-types'

import { getApiResource } from '@utils/network'

import styles from './SearchPage.module.css'

const SearchPage = () => {
  const [inputSearchValue, setInputSearchValue] = useState('')

  const getResponse = async (param) => {
    const res = await getApiResource()
  }

  const handleInputChange = (event) => {
    const value = event.target.value

    setInputSearchValue(value)
    getResponse(value)
  }

  return (
    <>
      <h1 className="header__text">Search</h1>
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder="Input characters's name"
      />
    </>
  )
}

SearchPage.propTypes = {
  //   propName: PropTypes.string,
}

export default SearchPage
