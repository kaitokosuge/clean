<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'key',
        'title',
        'user_id',
    ];
    public function articles()
    {
        return $this->belongsToMany(Article::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getUpdatedFolder()
    {
        return $this->orderBy('updated_at', 'DESC')->get();
    }
}
