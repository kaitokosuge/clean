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
    public function show($key)
    {
        $folder = Folder::where('key', $key)->firstOrFail();
        return Inertia::render('Folder/Show')->with(['folder' => $folder->load('articles'), 'folders' => Folder::with('articles')->orderBy('updated_at', 'DESC')->get()]);
    }
    public function store(Request $request, Folder $folder)
    {
        $input = $request->all();
        $folder->user_id = \Auth::id();
        $folder->fill($input)->save();
    }
    public function getFolders()
    {
        return response()->json([
            'user' => $user,
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
