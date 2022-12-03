<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>React</title>
    @viteReactRefresh
    @vite('resources/js/react_app.jsx')
</head>
<body>
<div id="app"></div>
<div>
    <a href="{{ url('/react/one') }}"> One </a>
</div>
<div>
    <a href="{{ url('/react/two') }}"> Two </a>
</div>
<div>
    <a href="{{ url('/') }}"> Topに戻る </a>
</div>
</body>
</html>
