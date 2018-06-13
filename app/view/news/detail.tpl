{% extends "../common/base.tpl" %}

{% block main %}
  <div class="container main">
    <header class="news_detail_header">
      <h2>{{ news.title }}</h2>
      <section>
        <p>{{ helper.dateFormat(news.date) }}</p>
      </section>
    </header>
    <article class="news_detail_featuredimg">
      <img src="{{ news.featuredimgurl }}" alt="{{ news.title }}" />
    </article>
    <div class="news_detail_content">{{ news.content.rendered | safe }}</div>
  </div>
{% endblock %}