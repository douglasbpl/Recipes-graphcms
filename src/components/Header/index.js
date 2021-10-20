import React from 'react'
import * as S from  './styles'

export  function Header ({ logoimgheader, btnabout, btnrecipes, btnsubscribe,titlerecipes, backgroundimgheader }) {

return (
    <S.ContainerHeader>
        <S.BoxH>
        <S.MenuHeader>
            <S.BoxLogoheader>
                <S.LogoHeader src={logoimgheader} alt="logo"/>
            </S.BoxLogoheader>
            <S.ListMenuHeader >
                <S.ListItemMenuHeader>{btnabout}</S.ListItemMenuHeader>
                <S.ListItemMenuHeader>{btnrecipes}</S.ListItemMenuHeader>
                <S.ListItemMenuHeader>{btnsubscribe}</S.ListItemMenuHeader>
            </S.ListMenuHeader >
        </S.MenuHeader>
        <S.BoxTitle>
        <S.TitleHeader>{titlerecipes}</S.TitleHeader>
        </S.BoxTitle>
        </S.BoxH>
    </S.ContainerHeader>
)
}