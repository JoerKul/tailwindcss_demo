import { Key } from "react";
import { blogList } from "./blog-list.js";
import { motion, Variants } from "framer-motion";
import "./App.css";

const imageAnimation: Variants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.5,
    },
  },
};

const textAnimation: Variants = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2.5,
    },
  },
};

function Card({
  image,
  h2,
  p,
  id,
}: {
  image: string;
  h2: string;
  p: string;
  id: string;
}) {
  return (
    <motion.div
      className="card"
      id={id}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div className="image-container" variants={imageAnimation}>
        {image}
      </motion.div>
      <motion.h2 variants={textAnimation}>{h2}</motion.h2>
      <motion.p variants={textAnimation}>{p}</motion.p>
    </motion.div>
  );
}

function App() {
  return blogList.map((blog, index) => (
    <div className="card-wrapper" key={index}>
      <Card {...blog} />
    </div>
  ));
}

export default App;
