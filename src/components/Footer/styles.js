import styled from 'styled-components'

export const ContainerFooter = styled.div`
display:flex;
background: #F2F4F1 0% 0% no-repeat padding-box;
`
       
export const SectionFooter = styled.section`
width:100%;
background-color:#F2F4F1;
display:flex;
flex-direction:column;
`      
export const ContainerNav = styled.div`
display:flex;
width:100%;
`

export const ContainerSLink = styled.div`
width:50%;
height: 20vh;
display:flex;
justify-content:center;
align-items:center;
 a {
     width:5%;
     margin-left:2rem;
 } 
 a > img {
     width:100%;
 }
`

export const ContainerLink = styled.div`
width:50%;
display:flex;
ul{
    list-style-type: none;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    }
   ul > li {
       width:20%;
   } 
    ul > li > a {
    text-decoration:none;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: 2.52px;
    color: #373737;
   }
`
export const ContainerTxtLayout = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
background-color: #446061 ;
p{
font: normal normal normal 14px/32px Roboto;
letter-spacing: 1.68px;
color: #FFFFFF
}
`
