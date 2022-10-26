import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`

    width: 200px;
    height: 200px;
    border: 1px solid;
    margin: 0 auto;
    margin-top: 15%;

    
`
const Card = () => {
    const ref  = useRef();
    const colors = ["red","green",]
    useEffect(()=>{
        setInterval(()=>{
            ref.current.style.background = colors[Math.round(Math.random()*colors.length)]

        },500)
    },[colors])


  return (
    <div>
       <Wrapper ref={ref}></Wrapper>
    </div>
  )
}

export default Card