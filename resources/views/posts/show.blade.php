@extends('layouts.plain')

@section('content')
<h1>{{ $post->post_title }}</h1>
<div>{!! $post->post_content !!}</div>
@endsection