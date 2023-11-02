<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContainerController extends Controller
{
    public function showTop()
    {
        return Inertia::render(
            'Container/TopContainer'
        );
    }
}
