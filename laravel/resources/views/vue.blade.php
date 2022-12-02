<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Vue</title>
    @vite(['resources/css/app.css', 'resources/js/app.ts'])
</head>
<body>
<div id="app"></div>
<div>
    <a href="{{ url('/vue/one') }}"> One </a>
</div>
<div>
    <a href="{{ url('/vue/two') }}"> Two </a>
</div>
<div>
    <a href="{{ url('/') }}"> Topに戻る </a>
</div>
</body>
</html>
