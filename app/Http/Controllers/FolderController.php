<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Folder;

class FolderController extends Controller
{
    public function index()
    {
        return Inertia::render('Folder/Index')->with(['folders' => Folder::with('articles')->orderBy('updated_at', 'DESC')->get()]);
    }
    public function show($key)
    {
        $folder = Folder::where('key', $key)->first();
        return Inertia::render('Folder/Show')->with(['folder' => $folder->load('articles')]);
    }
    public function create()
    {
        return Inertia::render('Folder/Create');
    }
    public function store(Request $request,Folder $folder)
    {
        $input = $request->all();
        $folder->user_id = \Auth::id();
        $folder->fill($input)->save();
    }
    public function getFolders()
    {
        $folders = Folder::all();
        return response()->json([
            'folders' => $folders,
        ]);
    }
}
