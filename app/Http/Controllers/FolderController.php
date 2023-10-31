<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Folder;
use Cloudinary;
use App\Models\User;

class FolderController extends Controller
{
    public function index()
    {
        $login_user_id = \Auth::user()->id;
        return Inertia::render(
            'Container/SidebarContainer'
        )->with(['user' => User::with('folders')->with('articles')->where("id", $login_user_id)->first()]);
    }
    public function store(Request $request, Folder $folder)
    {
        $input = $request->all();
        $folder->user_id = \Auth::id();
        $folder->fill($input)->save();
    }

    public function getSelectFolder(Folder $folder)
    {
        // dd(\Auth::user()->folders->where('key', $key)->first()->articles()->get());
        // $articles = \Auth::user()->folders->where('key', $key)->first()->articles()->get();
        $articles = $folder->articles()->get();
        // dd($articles);
        return response()->json([
            'selectFolderArticles' => $articles,
        ]);
    }
}
