<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Folder;
use Cloudinary;
use App\Models\User;
use App\Models\Article;


class FolderController extends Controller
{
    public function index()
    {
        $login_user_id = \Auth::user()->id;
        $articles = Article::with('log')->where('user_id', $login_user_id)->get();
        return Inertia::render(
            'Container/SidebarContainer'
        )->with(['articlesWithLog' => $articles,  'user' => User::where("id", $login_user_id)->with('folders')->with('articles')->with('logs')->first()]);
    }
    public function store(Request $request, Folder $folder)
    {
        $input = $request->all();
        $folder->user_id = \Auth::id();
        $folder->fill($input)->save();
    }
    public function getFolders()
    {
        $user = \Auth::user();
        $folders = $user->folders()->get();
        return response()->json([
            'folders' => $folders,
        ]);
    }
    public function getSelectFolder(Folder $folder)
    {
        $articles = $folder->articles()->orderBy('updated_at', 'DESC')->get();
        return response()->json([
            'selectFolderArticles' => $articles,
        ]);
    }
}
