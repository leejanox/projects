import React from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"

function SearchBox({placeholder,...props}:React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <URL_SB>
            <input type="text" placeholder={placeholder} {...props}/>
            <button type="submit" aria-label="search" onClick={(e)=>{e.preventDefault(); alert("search")}}>
                <FaSearch size={30} color="#15051f" />
            </button>
        </URL_SB>
    )
}

export const URL_SB = styled(SearchBox)`
    position: relative;
    width: 50rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    box-shadow:
        0 0 0.2rem rgba(0, 0, 0, 0.3),
        0 0 0.3rem rgba(0, 0, 0, 0.4),
        0 0 0.1rem rgba(0, 0, 0, 0.5) inset;
    padding: 0.3rem 1rem;
    padding-right: 3rem;

    input {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        font-weight: 400;
        color: #777;
        outline: none;
        border: none;
        background-color: transparent;
        padding: 0;
    }
    
    input::placeholder {
        color: rgba(0, 0, 0, 0.3);
        font-size: 0.8rem;
        font-weight: 600;
    }

    input:focus {
        box-shadow:
            0 0 0.2rem rgba(0, 0, 0, 0.6),
            0 0 0.3rem rgba(0, 0, 0, 0.7),
            0 0 0.1rem rgba(0, 0, 0, 0.8) inset;
    }
`