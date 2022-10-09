import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./BlogCard.module.css";

function BlogCard(props) {
  return (
    <Link href={props.post.path}>
      <div className={styles.mainContainer}>
        <div className={styles.text}>
          <div className={styles.title}>{props.post.title}</div>
          <div className={styles.description}>{props.post.description}</div>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.imageBorder}
            src={props.post.image}
            layout="fill"
          />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
