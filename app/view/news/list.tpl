{% extends "../common/base.tpl" %}

{% block main %}
  <div class="container main">
    <ul class="news-view view">
      {% for item in list %}
        <li>
          <a class="flex-r flex-s-b newsItem" href="/news/{{ item.id }}">
            <img src="{{ item.thumbnailurl }}" alt="{{ item.title }}" />
            <aside class="flexItem">
              <h4>{{ item.title }}</h4>
              <div>{{ item.excerpt | safe }}</div>
              <span>查看详情</span>
            </aside>
          </a>
        </li>
      {% else %}
        <p>没有文章</p>
      {% endfor %}
    </ul>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        {% if page == 1 %}
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">上一页</a>
          </li>
        {% else %}
          <li class="page-item">
            <a class="page-link" href="{{ '/news?page=' + (+page - 1) }}" tabindex="-1">上一页</a>
          </li>
        {% endif %}
        {% if hasMore %}
          <li>
            <a class="page-link" href="{{ '/news?page=' + (+page + 1) }}">下一页</a>
          </li>
        {% else %}
          <li class="page-item disabled">
            <a class="page-link" href="#">下一页</a>
          </li>
        {% endif %}
      </ul>
    </nav>
  </div>
{% endblock %}