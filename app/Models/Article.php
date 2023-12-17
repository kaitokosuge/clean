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
        'site_name',
        'url',
        'user_id',
    ];
    public function folders()
    {
        return $this->belongsToMany(Folder::class, 'article_folder', 'article_id', 'folder_id');
    }
    public function log()
    {
        return $this->hasOne(Log::class);
    }
}
