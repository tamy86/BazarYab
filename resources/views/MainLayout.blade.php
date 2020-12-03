<!DOCTYPE html>


<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="background-color:#f7f7f7;">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />


    <title>Laravel</title>


</head>
<body style="display: contents;width:100%;min-width: 100%;position: relative;">

<div>

    @yield('allcontent')

</div>


</body>

<script type="text/javascript" src="../js/app.js"></script>

</html>