<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <div>
        <a href="{{ url('/vue') }}"> Vue </a>
    </div>
    <br>
    <div>
        <a href="{{ url('/react') }}"> React </a>
    </div>

</head>
<body>
<div id="app"></div>
</body>
</html>
