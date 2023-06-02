import React, {useState} from 'react'
import Select from 'react-select'

const CustomSelect = ({options}) => {
  const [currentSlide, setCurrentSlide] = useState(options[0])

  return (
    <Select
      defaultValue={currentSlide}
      onChange={(newValue) => setCurrentSlide(newValue)}
      options={options}
      isSearchable={false}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#ccc',
          primary: '#b0b0b0',
        },
      })}/>
  )
}

export default CustomSelect