<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class ContainerController extends Controller
{
    public function showTop()
    {
        $login_user_id = \Auth::user()->id;
        return Inertia::render(
            'Container/TopContainer'
        )->with(['user' => User::where("id", $login_user_id)->first()]);
    }
}
