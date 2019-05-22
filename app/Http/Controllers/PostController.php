<?php

namespace App\Http\Controllers;

use Corcel\Model\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function show($id)
    {
        $post = Post::published()->where('ID', $id)->first();

        return view('posts.show', compact('post'));
    }
}
