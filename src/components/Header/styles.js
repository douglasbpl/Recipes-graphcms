import styled from 'styled-components'


export const ContainerHeader = styled.div`
background-image: url(${props => props.background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border:30px white solid
`
export const BoxH = styled.div`
display:flex;
flex-direction:column;
height:1303px;
width: 100%;
`

export const MenuHeader = styled.nav`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`
export const BoxLogoheader = styled.div`
height: 100%;
width: 5%;
display: flex;
align-items: center;
justify-content: center;
margin-left:4rem;
`

export const LogoHeader = styled.img`
width:5.32vw;
height:6vh;
`

export const ListMenuHeader = styled.ul`
list-style:none;
display:flex;
justify-content:space-evenly;
align-items:center;
width:36%;
height:9vh;`

export const ListItemMenuHeader = styled.li`
display:flex;
justify-content:center;
align-items:center;
font-family: 'PT Sans', sans-serif;
letter-spacing: 2.52px;
font-size:1.2vw;
color: #373737;
opacity: 1;
height:100%;
width: 26%;
text-align:center;
cursor:pointer;
&:hover {
    border: 5px solid #373737;;
}
:nth-child(3){
    width:40%;
}
`

export const BoxTitle = styled.div`
display: flex;
justify-content: center;
align-items:flex-end;
height:60%;
`

export const TitleHeader = styled.h1`
text-align:center;
color: #373737;
font-size:5vw;
font-family: 'PT Sans', sans-serif;
letter-spacing: 15.75px;
color: #373737;
`