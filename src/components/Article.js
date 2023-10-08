import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let emojis = "";
  if (minutes >= 30) {
    const minsRounded = Math.ceil(minutes / 10);
    for (let i = 0; i < minsRounded; i++) {
      emojis += "🍱";
    }
  } else {
    const minsRounded = Math.ceil(minutes / 5);
    for (let i = 0; i < minsRounded; i++) {
      emojis += "☕️";
    }
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date + " • "}</small>
      <span>{emojis}</span>
      <span>{` ${minutes} min read`}</span>
      <p>{preview}</p>
    </article>
  );
}

export default Article;