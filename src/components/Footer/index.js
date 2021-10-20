import React from 'react'
import * as S from  './styles'

export  function Footer ({ instabtn,twiterbtn,facebtn,pinterestbtn,about,recipes,subscribe,layoutfootertxt }) {

return (
    <S.ContainerFooter>
        <S.SectionFooter>
            <S.ContainerNav>
                <S.ContainerSLink>
                     <a href="#"><img src={instabtn} alt="instagran"/></a>
                     <a href="#"><img src={twiterbtn} alt="twiter"/></a>
                     <a href="#"><img src={facebtn}alt="facebook"/></a>                    
                     <a href="#"><img src={pinterestbtn}alt="pinterest"/></a>
                </S.ContainerSLink>
                <S.ContainerLink>
                    <ul>
                        <li><a href="#">{about}</a></li>
                        <li><a href="#">{recipes}</a></li>
                        <li><a href="#">{subscribe}</a></li>                        
                    </ul>
                </S.ContainerLink>
            </S.ContainerNav>

            <S.ContainerTxtLayout>
                <p>{layoutfootertxt}/</p>
            </S.ContainerTxtLayout>
        </S.SectionFooter>
    </S.ContainerFooter>
)
}