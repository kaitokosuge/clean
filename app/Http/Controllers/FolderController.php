<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Folder;

class FolderController extends Controller
{
    public function index(Folder $folder)
    {
        return Inertia::render('Folder/Index')->with(['folders' => $folder->get()]);
    }
    public function show(Folder $folder)
    {
        return Inertia::render('Folder/Show')->with(['folder' => $folder]);
    }
}
