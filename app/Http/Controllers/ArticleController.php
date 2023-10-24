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
        // dd($request);
        $input = $request->all();
        $article->folder_id = $folder->key;
        $article->user_id = \Auth::id();
        $article->fill($input)->save();
    }
}
