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
        $article->folder_id = $folder->id;
        $requestImage = $request->file('uploadfile');
        // dd($requestImage);
        if (isset($requestImage)) { //画像ファイルが送られた時だけ処理が実行される
            $image_url = Cloudinary::upload($requestImage->getRealPath())->getSecurePath();
            $input += ['img' => $image_url];
        }
        // dd($input);
        $article->fill($input)->save();
    }
}
