<html>
  <head>
    <title>Egg Demo</title>
    <link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/public/css/style.css" />
    {% block style %}{% endblock %}
  </head>
  <body>
    
    {% include "./header.tpl" %}

    {% block main %}
    {% endblock %}


    {% include "./footer.tpl" %}

    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>

    {% block script %}{% endblock %}
  
  </body>
</html>