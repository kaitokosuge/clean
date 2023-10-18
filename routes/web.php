<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\ArticleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/test', function () {
    return Inertia::render('Folder/Test');
});
Route::get('/planet', function () {
    return Inertia::render('Design/Planet');
});

Route::get('/', function () {
    return Inertia::render('Presentation/Index');
});
// Route::get('/', [FolderController::class, 'index']);
Route::middleware('auth')->group(function () {
    Route::post('/folder', [FolderController::class, 'store']);
    Route::get('/folder/{key}', [FolderController::class, 'show']);
    // Route::get('/create',[FolderController::class, 'create']);
    Route::get('/get/folders', [FolderController::class, 'getFolders']);

    Route::post('/article/{folder}', [ArticleController::class, 'store']);
    // Route::get('/get/articles', [ArticleController::class, 'getArticles']);

    //folder（内の記事）取得API
    Route::get('/get/folder/{folder}', [FolderController::class, 'getArticles']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
