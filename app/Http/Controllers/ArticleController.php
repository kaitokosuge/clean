<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Folder;

class ArticleController extends Controller
{
    public function store(Request $request,Article $article,Folder $folder)
    {
        $input = $request->all();
        $article->folder_id = $folder->id;
        $article->fill($input)->save();
    }
}
