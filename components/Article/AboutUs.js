import React from 'react'
import "./App.css";
function AboutUs({img1, img1Alt, img2, img2Alt, img3, img3Alt, img4, img4Alt, 
    articleTitle, strongText1,
strongText2, strongText3, articlePar1, artitlePar2, artitlePar3, artitlePar4, artitlePar5,
artitlePar6, articleSubHead1, articleSubHead2, widgetTitle, widgetRecentTitle1, widgetRecentTitle2, widgetRecentTitle3}) {
    return (
        <>
         
    <div className="container container-flex">
         <main role = "main">
            
            <img src={img1} alt={img1Alt} className="image-full"/>
    <h2>{articleTitle}</h2>

    <p><strong>{strongText1}</strong>{articlePar1}</p>
    <p>{artitlePar2}</p>  
                
    <h3>{articleSubHead1}</h3>
    <p><strong>{strongText2}</strong> {artitlePar3}</p>
    <p>{artitlePar4}</p>
            
    <h3>{articleSubHead2}</h3>
    <p><strong>{strongText3}</strong> {artitlePar5}</p>
    <p>{artitlePar6}</p>   

            
            
            
         </main>
         <aside className = "sidebar">
            
             <div className="sidebar-widget">
    <h2 className="widget-title">{widgetTitle}</h2>
                 <div className="widget-recent-posts">
    <h3 className="widget-recent-posts-title">{widgetRecentTitle1}</h3>
                     <img src={img2} alt={img2Alt} className="widget-image"/>
                 </div>
                 <div className="widget-recent-posts">
    <h3 className="widget-recent-posts-title">{widgetRecentTitle2}</h3>
                    <img src={img3} alt={img3Alt} className="widget-image"/>
                </div>
                <div className="widget-recent-posts">
    <h3 className="widget-recent-posts-title">{widgetRecentTitle3}</h3>
                    <img src={img4} alt={img4Alt} class="widget-image"/>
                </div>
             </div>
         </aside>
    </div>
        </>
    )
}

export default AboutUs;
