{% extends "../common/base.tpl" %}

{% block main %}
  <div class="container main">
    <header class="post_detail_header">
      <h2>{{ post.title }}</h2>
      <section>
        <p>{{ helper.dateFormat(post.date) }}</p>
      </section>
    </header>
    <article class="post_detail_featuredimg">
      <img src="{{ post.featuredimgurl }}" alt="{{ post.title }}" />
    </article>
    <div class="post_detail_content">{{ post.content.rendered | safe }}</div>
  </div>
{% endblock %}