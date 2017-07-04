<!doctype html>
{%html framework="san-todo-mvc:third-party/js/mod.js" %}
  {%head%}
    <meta charset="utf-8">
    <title>todos-esnext</title>
  {%endhead%}
  {%body%}
    <div id="app">
      {{ssr|raw}}
    </div>
    {%script%}
      require('../src/main.js')
    {%endscript%}
  {%endbody%}
{%endhtml%}

