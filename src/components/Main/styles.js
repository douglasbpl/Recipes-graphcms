import styled from 'styled-components'

export const ContainerMain = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:space-around;
background: #DFE4DE 0% 0% no-repeat padding-box;
`
export const SectionF = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
export const BoxLatest = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
min-height:57vh;
width:80%;
 h2 {
    font-family: 'PT Sans', sans-serif;
    font-size: 3vw;
    letter-spacing: 1.72px;
    color: #373737;
    text-transform: uppercase;
 }
 &:after{
    content: "";
    width: 8vw;
    height: 7px;
    background: #000;
    display: flex;
    position: relative;
    top:0.4px;
    right: 1vw;
}
 
`


export const BoxFood = styled.div`
display:flex;
height:70%;
width:80%;
justify-content:space-around;
    
}
`
export const BoxImgTxtFood = styled.div`
display:flex;
width:25%;
height:60vh;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-color:white;
box-shadow: 0px 7px 6px #00000029;
div{
    display:flex;
    justify-contente:center;
    align-items:center;
    flex-direction:column;
    width:80%;
    height:5%;
}
div &:after{
    content: "";
    width: 50px;
    height: 5px;
    background: #000;
    display: flex;
    position: relative;
    bottom: 20vh;
    left: 0.1vw;
} 
     
  div >  p {
    font-family: 'PT Sans', sans-serif;
    font-size:1.2vw;
    letter-spacing: 0px;
    color: #373737;
  }

`
export const ImgFood = styled.img`
height:50%;
width:100%;
`

export const SectionS = styled.section`
display:flex;
width:100%;
}
    div {
    display:flex;
    align-items:center;
    width:100%;
    height:90vh;           
       }
        div > img{
            width:50%;
            height:80%;
        }
                            
        
            div > div {
                display:flex;
                flex-direction:column;
                justify-content: center;
                align-items:center;  
                height:80%;
                width:50%;
                background-color:white;                                 
            }
                     
                div > div > h2 {
                    width: 20%;
                    height: 9vh;
                    text-align: center;
                    font-size:2vw;
                    font-family: 'PT Sans',sans-serif;
                    letter-spacing: 1.72px;
                    color: #373737;
                }
                div > div > h2 ::after{
                    content: "";
                    width: 4vw;
                    height: 0.5vh;
                    background: #000;       
                    display: flex;
                    position: relative;
                    top: 2vh;
                    left: 3vw;
                }

                
                div > div > p {
                    height: 27vh;
                    width: 40vw;
                    font-size: 20px;
                    text-align: left;
                    font-family: 'PT Sans',sans-serif;
                    letter-spacing: 0px;
                    color: #373737;
                }
                                 
}
`
export const SectionT = styled.section`
display:flex;
width:100%;
justify-content: center;
  div{
    height:40vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width:50%;
    background: #DFE4DE 0% 0% no-repeat padding-box;
  }
  div > div {
      display;flex;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      height:40%;
      width:80%;
          
  }
    div > div > input {
        height:50%;
        width:15vw;
        text-align: center;
        font-family: 'PT Sans', sans-serif;
        letter-spacing: 0px;
        color: #707070;
        border: 0 none;
        outline: 0;
        background: #EFF1EE 0% 0% no-repeat padding-box; 
        text-align:left;
        padding-left:2rem;     
    }
    
    div > div > h2 {
        font-family: 'PT Sans', sans-serif;
        letter-spacing: 4.2px;
        color: #373737;
    }
    div > div > p {
        text-align: left;
        font-family: 'PT Sans', sans-serif;
        letter-spacing: 2.05px;
        color: #373737;
        
    }
    div > div > button {
        border: red;
        height:30%;
        width:8vw;
        font-family: 'PT Sans', sans-serif;
        letter-spacing: 6.14px;
        color: #373737;
        cursor:pointer;
        background: #DFE4DE 0% 0% no-repeat padding-box;
        
    }
     div > div > button :hover  {
        border: 5px solid #373737;
    }

`

