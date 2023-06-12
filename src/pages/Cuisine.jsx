import React from 'react'
import { Styled } from 'styled-components'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    }

  return (
    <div>
      Cuisine
    </div>
  )
}

export default Cuisine
