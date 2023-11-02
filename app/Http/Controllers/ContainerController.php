<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Folder;


class ContainerController extends Controller
{
    public function showTop()
    {
        $login_user_id = \Auth::user()->id;
        return Inertia::render(
            'Container/TopContainer'
        )->with(['user' => User::where("id", $login_user_id)->first(), 'folders' => Folder::with('user')->get()]);
    }
    // auth以外のプロフィール
    public function showProfile(User $user)
    {
        return Inertia::render(
            'Container/ProfileContainer'
        )->with(['user' => $user->with('folders')->with('articles')->first()]);
    }
}
