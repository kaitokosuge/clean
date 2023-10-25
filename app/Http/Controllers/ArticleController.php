<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Folder;
use Cloudinary;

class ArticleController extends Controller
{
    public function store(Request $request, Article $article, Folder $folder)
    {
        $article->url = $request->url;
        $article->folder_id = $request->key;
        $article->title = $request->title;
        $article->image = $request->image;
        $article->description = $request->description;
        $article->user_id = \Auth::id();
        $article->save();
    }
}
