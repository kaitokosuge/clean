<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DateTime;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'kaitokosuge',
            'email' => 'k@k',
            'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert([
            'name' => 'aotokosuge',
            'email' => 'a@a',
            'password' => Hash::make('password'),
        ]);
    }
}
