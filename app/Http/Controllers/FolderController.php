<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Folder;
use Cloudinary;

class FolderController extends Controller
{
    public function index()
    {
        return Inertia::render('Folder/Index')->with(['folders' => Folder::with('articles')->orderBy('updated_at', 'DESC')->get()]);
    }
    public function show($key)
    {
        $folder = Folder::where('key', $key)->firstOrFail();
        return Inertia::render('Folder/Show')->with(['folder' => $folder->load('articles'), 'folders' => Folder::with('articles')->orderBy('updated_at', 'DESC')->get()]);
    }
    public function store(Request $request, Folder $folder)
    {
        // dd($request);
        $input = $request->all();
        $folder->user_id = \Auth::id();
        // if($request->file('image')){ //画像ファイルが送られた時だけ処理が実行される
        //     $image_url = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();
        //     dd($image_url);
        //     $input += ['image' => $image_url];
        // }

        $folder->fill($input)->save();
    }
    public function getFolders()
    {
        $folders = Folder::orderBy('updated_at', 'DESC')->get();
        return response()->json([
            'folders' => $folders,
        ]);
    }
    public function getArticles(Folder $folder)
    {
        $fetchfolder = Folder::where('id', $folder->id)->with('articles')->firstOrFail();
        return response()->json([
            'folder' => $fetchfolder,
        ]);
    }
}
