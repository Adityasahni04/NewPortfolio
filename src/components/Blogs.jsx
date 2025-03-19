import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Internship at Barclays",
      author: "Aditya",
      image: "/images/adi1.jpg",
      likes: 234,
      comments: 123,
      para1:
        "Stepping into Barclays for my summer internship was like entering a world of innovation. The RFT team's guidance and unity made learning about risk finance inspiring.",
      para2:
        "From day one, the people at Barclays made it clear that this wasn’t just a workplace; it was a community. I was fortunate to be placed in the RFT (Risk Finance Treasury) team, under the guidance of the affable Subhasis Sir, my Line Manager.",
      para3:
        "From the very first day, I was mesmerized by the grandeur of the Infinity and Harmony buildings. The state-of-the-art infrastructure served as a constant reminder of the innovative spirit that Barclays embodies.",
    },
  ];
  return (
    <div className="blogSection">
      <div className="blogHeader">
      <h3>Recent Posts?</h3>
        <h1>Blogs</h1>
      </div>
      {blogData.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          image={blog.image}
          likes={blog.likes}
          comments={blog.comments}
          para1={blog.para1}
          para2={blog.para2}
          para3={blog.para3}
        />
      ))}
    </div>
  );
};

export default Blogs;
