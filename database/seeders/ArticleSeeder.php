<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DateTime;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
            'title' => 'jsのここが楽しい1000選',
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/pen.png',
            'memo' => '後で読もうな',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'reactのここが楽しい1000選',
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tony.png',
            'memo' => 'react始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Inertiaしか勝たん♡',
            'folder_id' => 2,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'memo' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
