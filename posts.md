---
title: "Assorted posts"
permalink: "/blog/"
layout: page
---


  {% for post in site.posts %}
    <ul>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
      - <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    </ul>
  {% endfor %}