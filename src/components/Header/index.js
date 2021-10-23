import React from 'react'
import * as S from  './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Header() {

 const data = useStaticQuery(graphql`
 query {
     alldata {
       recipes {
         logoimgheader {
           id
           url
         }
         btnabout
         btnrecipes
         btnsubscribe
         titlerecipes
         backgroundimgheader {
           id
           url
         }
       }
    }
    }
 `)

 const { logoimgheader, btnabout, btnrecipes, btnsubscribe,titlerecipes, backgroundimgheader } = data.alldata.recipes[0] 

return (
    <S.ContainerHeader background={backgroundimgheader.url} >
        <S.BoxH>
        <S.MenuHeader>
            <S.BoxLogoheader>
               <S.LogoHeader src={logoimgheader.url} alt="logo"/>
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

// export  function Header ({ logoimgheader, btnabout, btnrecipes, btnsubscribe,titlerecipes, backgroundimgheader }) {

//  return (
//     <S.ContainerHeader background={backgroundimgheader} >
//         <S.BoxH>
//         <S.MenuHeader>
//             <S.BoxLogoheader>
//                <S.LogoHeader src={logoimgheader} alt="logo"/>
//            </S.BoxLogoheader>
//             <S.ListMenuHeader >
//                <S.ListItemMenuHeader>{btnabout}</S.ListItemMenuHeader>
//                 <S.ListItemMenuHeader>{btnrecipes}</S.ListItemMenuHeader>
//                <S.ListItemMenuHeader>{btnsubscribe}</S.ListItemMenuHeader>
//             </S.ListMenuHeader >
//         </S.MenuHeader>
//        <S.BoxTitle>
//                     <S.TitleHeader>{titlerecipes}</S.TitleHeader>
//          </S.BoxTitle>
//          </S.BoxH>
//     </S.ContainerHeader>
// )
// }