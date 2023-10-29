<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'image',
        'url',
        'user_id',
        'folder_id',
    ];
    public function folders()
    {
        return $this->belongsToMany(Folder::class);
    }
}
