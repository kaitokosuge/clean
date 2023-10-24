<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'memo',
        'img',
        'url',
        'user_id',
        'folder_id',
    ];
    public function folder()
    {
        return $this->belongsTo(Folder::class);
    }
}
