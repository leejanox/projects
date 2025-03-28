import { Link , LinkProps } from 'react-router-dom';
import styled from 'styled-components';

function CustomLink({children,...props}:LinkProps){
    return <Link {...props} rel='noopener noreferrer'>{children}</Link>
}

interface LProps extends LinkProps{
    textColor?:string;
    lineColor?:string;
}

export const L1 = styled(CustomLink)<LProps>`
    position:relative;
    display:inline-block;
    background-color: transparent;
    color: ${({textColor})=> textColor? textColor :'white'};
    text-decoration:none;

    &::after{
        content:'';
        border-bottom: 1.2px solid ${({lineColor})=>lineColor?lineColor:'#FFFE91'};
        width:0;
        position:absolute;
        bottom:-2px; left:0;
        transition: width 0.3s ease-in;
    }
    
    &:hover::after{
        width:100%;
    }
`
