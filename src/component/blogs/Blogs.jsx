import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <section className="container mb-10 py-8">
          <h1 className="mb-8 border-l-8 py-2 text-center text-3xl font-bold">
            Out Last Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BlogCard Img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwooQ9JwGnccfwJYTq4mV9oVAqGoZQPXH6eDoszvHtQffEaGItyaiSsVUtBpjhZeJUZ8S1iGRB5-ud40BZ8eg-hHcTHerTLXPY5uMyUbh1KE57o8-f4vJKfHiai1802Bgro-nucrOjRCiCwr8kaw8PjWx9M8G8u4D0BbvoA0E9y-i3qRg2sG5khVqmM64/s1600/20231028104517600.jpg" />
            <BlogCard Img="https://ecdn.game4v.com/g4v-content/uploads/2020/09/game4v-The-Rising-of-The-Shield-Hero-season-2-1.jpg" />
            <BlogCard Img="https://www.lamchame.com/forum/attachments/one-piece-jpg.1035417/" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
