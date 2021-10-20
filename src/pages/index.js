import React from 'react';
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
      }
`

export const query = graphql`

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
`

export default function Index({ data }) {

  const dataHeader = data.alldata.recipes[0] 
  const dataMain = data.alldata.mains[0]
  const dataFooter = data.alldata.footers[0]

  return (
    <div>
      {console.log(data)}
      <GlobalStyle/>
      <Header
      logoimgheader={dataHeader.logoimgheader.url}
      btnabout={dataHeader.btnabout}
      btnrecipes={dataHeader.btnrecipes}
      btnsubscribe={dataHeader.btnsubscribe}
      titlerecipes={dataHeader.titlerecipes}
      backgroundimgheader={dataHeader.backgroundimgheader.url}           
      />

      <Main
      latesttitle={dataMain.latesttitle}
      cakeimg={dataMain.cakeimg.url}
      caketxt={dataMain.caketxt}
      pizzaimg={dataMain.pizzaimg.url}
      pizzatxt={dataMain.pizzatxt}
      smothieimg={dataMain.smothieimg.url}
      smothietxt={dataMain.smothietxt}
      spoonimg={dataMain.spoonimg.url}
      spoontitle={dataMain.spoontitle}
      spoontxt={dataMain.spoontxt}
      subscribetitle={dataMain.subscribetitle}
      subscribetxt={dataMain.subscribetxt}
      btnsubmit={dataMain.btnsubmit}
      />      

      <Footer
      instabtn={dataFooter.instabtn.url}
      twiterbtn={dataFooter.twiterbtn.url}
      facebtn={dataFooter.facebtn.url}
      pinterestbtn={dataFooter.pinterestbtn.url}
      about={dataFooter.about}
      recipes={dataFooter.recipes}
      subscribe={dataFooter.subscribe}
      layoutfootertxt={dataFooter.layoutfootertxt}
      /> 
      
  </div>
  )
}