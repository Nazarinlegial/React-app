import React from "react";
import ProfileInfo from "./contentBar/Profile_Info";
import ProfilePost from "./contentBar/Profile_post";

// Основной контент

// Вызываем Инфо и Посты нашего профиля
const Content = () =>{
  return (
    <section className="content">
          <ProfileInfo />

          <ProfilePost />
      </section>
  )
}

export default Content;