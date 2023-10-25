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
            'title' => 'Inertiaしか勝たん♡',
            'user_id' => 1,
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'description' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Laravelを始めよう1',
            'user_id' => 1,
            'folder_id' => 2,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/ton.png',
            'description' => 'Laravel始めたい人にまずお勧めする記事',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'バイトのGoogleカレンダー',
            'user_id' => 1,
            'folder_id' => 2,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonp.png',
            'description' => '業務用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'バイトのGoogleカレンダー',
            'user_id' => 1,
            'folder_id' => 2,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonp.png',
            'description' => '業務用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'バイトのGoogleカレンダー',
            'user_id' => 1,
            'folder_id' => 3,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonp.png',
            'description' => '業務用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Inertiaしか勝たん♡',
            'user_id' => 1,
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'description' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Inertiaしか勝たん♡',
            'user_id' => 1,
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'description' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Inertiaしか勝たん♡',
            'user_id' => 1,
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'description' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Inertiaしか勝たん♡',
            'user_id' => 1,
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'description' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Inertiaしか勝たん♡',
            'user_id' => 1,
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'description' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('articles')->insert([
            'title' => 'Inertiaしか勝たん♡',
            'user_id' => 1,
            'folder_id' => 1,
            'url' => 'https://kaiton-blog.space',
            'image' => 'https://kaiton-blog.space/img/tonr.png',
            'description' => 'react or vueと何かしらバックエンドフレームワーク始めたい人に共有用',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
