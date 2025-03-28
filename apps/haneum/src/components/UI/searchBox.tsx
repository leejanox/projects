import React from "react"
import styled from "styled-components"

function SearchBox({placeholder,...props}:React.InputHTMLAttributes<HTMLInputElement>) {
    return <input type="text" placeholder={placeholder} {...props}/>
}

export const URL_SB = styled(SearchBox)`
`