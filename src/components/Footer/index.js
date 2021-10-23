import React from 'react'
import * as S from  './styles'

import { graphql, useStaticQuery} from 'gatsby'

export function Footer() {

    const data = useStaticQuery(graphql`
    query {
        alldata {
                footers {
                    facebtn {
                      id
                      url
                    }
                    instabtn {
                      id
                      url
                    }
                    twiterbtn {
                      id
                      url
                    }
                    pinterestbtn {
                      id
                      url
                    }
                    about
                    recipes
                    subscribe
                    layoutfootertxt                
                 }
            }
       }
    `) 

const { instabtn,twiterbtn,facebtn,pinterestbtn,about,recipes,subscribe,layoutfootertxt } = data.alldata.footers[0]

return (
    <S.ContainerFooter>
        <S.SectionFooter>
            <S.ContainerNav>
                <S.ContainerSLink>
                     <a href="#"><img src={instabtn.url} alt="instagran"/></a>
                     <a href="#"><img src={twiterbtn.url} alt="twiter"/></a>
                     <a href="#"><img src={facebtn.url}alt="facebook"/></a>                    
                     <a href="#"><img src={pinterestbtn.url}alt="pinterest"/></a>
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