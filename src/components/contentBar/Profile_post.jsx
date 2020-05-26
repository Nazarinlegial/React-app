import React from "react";
import './Profile_post.css';

// Посты профиля

const ProfilePost = () =>{
  return(
    <div className="posts-profile">
          <div className="post_title">My post</div>
          <div><input type="text" className="new-post" placeholder="your news..." /></div>
          <div className="btn-post">
          <button className="send-post">Send</button>
          </div>
          <div className="saves-post">
            <ul>
              <li>Hey, why nobody love me?</li>
              <li>Sey, why nobody love me?</li>
              <li>Why, why nobody love me?</li>
              <li>You, why nobody love me?</li>
            </ul>
          </div>
          </div>
  )
}

export default ProfilePost;