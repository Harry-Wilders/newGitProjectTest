import React from "react";
import {Link} from "react-router-dom"
import "./App.css";

function Article({ img1, img2, img3, img4 }) {
  return (
    <>
      <div className="container">
        <div className="container-flex">
          <main role="main">
            <article className="article-recent">
              <div className="article-recent-main">
                <h2 className="article-title">Beauty in art</h2>
                <p className="article-body">
                Art is a way of expressing yourself. 
                Different artworks showcase the beauty and how someone perceives of it.
                Just like they say “a picture is worth a thousand words”, 
                any art will express you into understanding how everything operates.
                </p>
                <Link to= '/article1' className="article-read-more">
                  CONTINUE READING
                </Link>
              </div>
              <div className="article-recent-secondary">
                <img src={img1} className="article-image" />
                <p className="article-info">July 3, 2020 | 3 comments</p>
              </div>
            </article>

            <article className="article-recent">
              <div className="article-recent-main">
                <h2 className="article-title">Who is an artist</h2>
                <p className="article-body">
                Art is an expression of who you are. Artists create and build things form their own imagination.
Everyone has their own God given talent, in which they can showcase their beauty. The beauty of art is in its own creation, and making. The hidden talent and gifts we have makes us more beautiful in that sense. 
To do art, is to craft and make it a success. An Artist understands his or her own role, and prefers living life to its full conclusion.
If it interests you must write, learn to learn, and more importantly understand what you are doing.

In art there are four most important things: Discipline, Character, Attitude and Prayers. With this you can achieve whatever you want in life. In this you are able to distinguish what is right for you and what you need to do.
                </p>
                <Link to= '/article2' className="article-read-more">
                  CONTINUE READING
                </Link>
              </div>
              <div className="article-recent-secondary">
                <img src={img2} className="article-image" />
                <p className="article-info">July 3, 2020 | 3 comments</p>
              </div>
            </article>

            <article className="article-recent">
              <div className="article-recent-main">
                <h2 className="article-title">Passion for art</h2>
                <p className="article-body">
                Art has been used as a tool for expressing and showcasing ideas. Through Art we have been able to understand diversity and culture of different people. Sharing art work is in itself a means of creating a broader platform where everyone can share their ideologies.
                With this in mind we set out to create a platform “ART DIRA” where people can showcase their art work exclusively. We intend to make it, as a secure platform where both children and adults can share their art. 
                For children below the age of 10 years, we intend that they will share with help of a guardian or a parent.
                We therefore hope that it is going to be of great benefit to everyone.
                </p>
                <Link to= '/article3' className="article-read-more">
                  CONTINUE READING
                </Link>
              </div>
              <div className="article-recent-secondary">
                <img src={img3} className="article-image" />
                <p className="article-info">July 3, 2020 | 3 comments</p>
              </div>
            </article>
          </main>

          <aside className="sidebar">
            <div className="sidebar-widget">
              <h2 className="Widget-title">ABOUT US</h2>
              <img src={img4} alt="" className="widget-image" />
              <p className="widget-body">
               Dira art is about sharing, learning and growing.    
              </p>
            </div>

            <div className="sidebar-widget">
              <h2 className="widget-title">RECENT POSTS</h2>
              <div className="widget-recent-posts">
                <h3 className="widget-recent-posts-title">
                  Keep doing whatever you do simple
                </h3>
                <img src={img1} alt="" className="widget-image" />
              </div>

              <div className="widget-recent-posts">
                <h3 className="widget-recent-posts-title">
                  Life is about simplicity
                </h3>
                <img src={img2} alt="" className="widget-image" />
              </div>

              <div className="widget-recent-posts">
                <h3 className="widget-recent-posts-title">
                  Keep cooking simple
                </h3>
                <img src={img3} alt="" className="widget-image" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Article;
