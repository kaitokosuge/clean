<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DateTime;
use Illuminate\Support\Facades\DB;

class FolderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('folders')->insert([
            'key' => 'a',
            'title' => 'JavaScriptの後で読む記事',
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
            'user_id' => 1,
            'rgb' => '231,182,139,255',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('folders')->insert([
            'key' => 'b',
            'title' => 'levtech-college',
            'image' => 'https://kaiton-blog.space/img/tonb.png',
            'user_id' => 1,
            'rgb' => '21,182,139,255',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('folders')->insert([
            'key' => 'c',
            'title' => '生徒共有用',
            'image' => 'https://kaiton-blog.space/rose1.png',
            'user_id' => 1,
            'rgb' => '21,112,139,255',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('folders')->insert([
            'key' => 'd',
            'title' => 'メンター共有用',
            'image' => 'https://kaiton-blog.space/img/tonb.png',
            'user_id' => 2,
            'rgb' => '241,12,219,255',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
