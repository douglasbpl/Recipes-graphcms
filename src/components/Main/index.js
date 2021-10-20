import React from 'react'
import * as S from  './styles'

export  function Main ({latesttitle, cakeimg, caketxt, pizzaimg, pizzatxt,
     smothieimg,smothietxt,spoonimg,spoontitle,spoontxt,subscribetitle,subscribetxt,btnsubmit }) {

return (
    <S.ContainerMain>
        
        <S.SectionF>
            <S.BoxLatest>
                <h2>{latesttitle}</h2>
                <S.Divide></S.Divide>
            </S.BoxLatest>
            
            <S.BoxFood>
                <S.BoxImgTxtFood>
                    <S.ImgFood src={cakeimg} alt="cake"/>
                    <div>
                    <div></div>
                    <p>{caketxt}</p>
                    </div>
                </S.BoxImgTxtFood>
                <S.BoxImgTxtFood>
                    <S.ImgFood  src={pizzaimg} alt="pizza"/>
                    <div>
                    <div></div>
                    <p>{pizzatxt}</p>
                    </div>
                </S.BoxImgTxtFood>
                <S.BoxImgTxtFood>
                    <S.ImgFood src={smothieimg} alt="smothieimg"/>
                    <div>
                    <div></div>
                    <p>{smothietxt}</p>
                    </div>
                </S.BoxImgTxtFood>                
            </S.BoxFood>
        </S.SectionF>

        <S.SectionS>
            <div>
            <img src={spoonimg} alt="Spoom"/>
            <div>
                <h2>{spoontitle}</h2>
                <div></div>
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