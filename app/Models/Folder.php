<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Folder extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'user_id',
    ];
    public $timestamps = false;
    public $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    public function articles()
    {
        return $this->belongsToMany(Article::class, 'article_folder', 'folder_id', 'article_id');
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
