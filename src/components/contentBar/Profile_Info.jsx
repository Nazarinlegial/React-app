import React from "react";
import   "./Profile_Info.css";

// Инфо Профиля 

const ProfileInfo = () => {
  return(
    <div>
      <div className="img-profile">
          <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
          </div>
          <div className="info-profile-box">
            <div className="avatar_img">
               <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
            </div> 
            <div className="info-profile">
              <div className="profile__name">Nazar K</div>
              <ul>
                <li>Date of birth: 17 august</li>
                <li>City: Kiev</li>
                <li>Education: School №265</li>
                <li>Web-site:www</li>
              </ul>
            </div>           
          </div>
    </div>      
  )
}

export default ProfileInfo;