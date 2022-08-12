import React from "react";
import { format } from "date-fns";

export default function Card({ post }) {
  return (
    <div className="col-4 p-card--highlighted u-no-padding">
      <div className="p-card__header padded">
        <h5 className="p-heading--5 uppercase">Cloud And Server</h5>
      </div>
      <div className="p-card__content canon-card__content">
        <img
          src={post.featured_media}
          alt={post.title.rendered}
          className="p-card__image"
        />

        <h4 className="p-card__title p-heading--4">
          <a href={post.link} target="_blank" rel="noreferrer">
            {post.title.rendered}
          </a>
        </h4>
        <p>
          <cite>
            By{" "}
            <a
              href={post._embedded.author[0].link}
              target="_blank"
              rel="noreferrer"
            >
              {post._embedded.author[0].name}
            </a>{" "}
            on {format(new Date(post.date), "dd MMMM yyyy")}
          </cite>
        </p>
      </div>
      <div className="p-card__footer">
        <p>Article</p>
      </div>
    </div>
  );
}
