import React from "react";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-4">
      <div className="border p-4">
        <h1 className="text-3xl">Web Development Basics</h1>
        <p>
          Description: Learn the foundations of HTML, CSS, and JavaScript to
          start building your own websites. Duration: 4 Weeks
        </p>
      </div>

      <div className="border p-4">
        <h1 className="text-3xl">Introduction to Graphic Design</h1>
        <p>
          Description: Discover the principles of design and get hands-on with
          tools like Photoshop and Canva. Duration: 3 Weeks
        </p>
      </div>

      <div className="border p-4">
        <h1 className="text-3xl">Digital Marketing Essentials</h1>
        <p>
          Description: Master the basics of SEO, social media marketing, and
          email campaigns to grow your online presence. Duration: 5 Weeks
        </p>
      </div>
    </div>
  );
};

export default Courses;
