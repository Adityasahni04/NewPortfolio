import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Why Microservices in Docker Are the Future (and How My Coffee Machine Almost Crashed Production)",
      author: "Aditya",
      image: "/images/Blog1.png",
      likes: 327,
      comments: 145,
      para1:
        "Picture this: I once built a monolithic app so tightly coupled that fixing a typo in the login page broke our office coffee machine’s WiFi. That’s when I realized—it’s time to embrace microservices. Docker isn’t just a tool; it’s a game-changer for developers tired of hearing, ‘But it works on my machine!’. Let’s break it down.",
      para2:
        "Microservices in Docker are like building blocks—each service (user auth, payment, notifications) lives in its own container, blissfully unaware of the others. Need to scale the payment service? Just spin up another container. Update the auth system? No need to rebuild the entire app. But here’s the catch: orchestrate poorly, and you’ll end up with a digital Jenga tower. My first attempt? Let’s just say Kubernetes had to step in like a babysitter for my overenthusiastic containers.",
      para3:
        "The magic happens when you combine microservices’ flexibility with Docker’s consistency. I once containerized a legacy monolith into 12 microservices. Result? Deployment time dropped from 45 minutes to 90 seconds...",
    }
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
