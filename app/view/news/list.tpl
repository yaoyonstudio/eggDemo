{% extends "../common/base.tpl" %}

{% block main %}
  <div class="container main">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://pgadmin.thatyou.cn/media/slide1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://pgadmin.thatyou.cn/media/slide2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://pgadmin.thatyou.cn/media/slide3.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <ul class="news-list">
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