import Course from "./Course";

import html from "./assets/html1.png";
import css from "./assets/css.png";
import js from "./assets/js.png";

function CourseList() {
  const courses = [
    {
      name: "HTML Full Course",
      price: "$199",
      image: html,
      rating: 5,
    },
    {
      name: "CSS",
      price: "$199",
      image: css,
      rating: 4,
    },
    {
      name: "JS",
      price: "$499",
      image: js,
      rating: 5,
    },
  ];

  return (
    <>
      {courses.map((item) => (
        <Course
          name={item.name}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </>
  );
}
export default CourseList;
