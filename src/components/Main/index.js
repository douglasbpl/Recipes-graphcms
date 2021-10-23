import React from 'react'
import * as S from  './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Main() {

 const data = useStaticQuery(graphql`
 query {
     alldata {
            mains {
                latesttitle
                caketxt
                pizzatxt
                smothietxt
                cakeimg {
                url
                id
                }
                pizzaimg {
                id
                url
                }
                smothieimg {
                id
                url
                }
                spoonimg {
                id
                url
                }
                spoontitle
                spoontxt
                subscribetitle
                subscribetxt
                btnsubmit                 
            }
        }
    }
 `)

 const { latesttitle, cakeimg, caketxt, pizzaimg, pizzatxt,
    smothieimg,smothietxt,spoonimg,spoontitle,spoontxt,subscribetitle,
    subscribetxt,btnsubmit } = data.alldata.mains[0]



return (
    <S.ContainerMain>
        
        <S.SectionF>
            <S.BoxLatest>
                <h2>{latesttitle}</h2>
                
            </S.BoxLatest>
            
            <S.BoxFood>
                <S.BoxImgTxtFood>
                    <S.ImgFood src={cakeimg.url} alt="cake"/>
                    <div>
                    
                    <p>{caketxt}</p>
                    </div>
                </S.BoxImgTxtFood>
                <S.BoxImgTxtFood>
                    <S.ImgFood  src={pizzaimg.url} alt="pizza"/>
                    <div>
                    
                    <p>{pizzatxt}</p>
                    </div>
                </S.BoxImgTxtFood>
                <S.BoxImgTxtFood>
                    <S.ImgFood src={smothieimg.url} alt="smothieimg"/>
                    <div>
                    
                    <p>{smothietxt}</p>
                    </div>
                </S.BoxImgTxtFood>                
            </S.BoxFood>
        </S.SectionF>

        <S.SectionS>
            <div>
             <img src={spoonimg.url} alt="Spoom"/>
             <div>
                <h2>{spoontitle}</h2>
                <p>{spoontxt}</p>
            </div>
            </div>
        </S.SectionS>

        <S.SectionT>
            <div>
                <div>
                    <h2>{subscribetitle}</h2>
                    <p>{subscribetxt}</p>
                </div>
                <div>
                    <input placeholder="Your Email"></input>
                    <button>{btnsubmit}</button>
                </div>
            </div>

        </S.SectionT>
            
    </S.ContainerMain>
)
}