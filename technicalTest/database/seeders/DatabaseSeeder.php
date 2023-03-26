<?php

namespace Database\Seeders;

use App\Models\Departments;
use App\Models\Muni;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            Departments::class,
            Muni::class
        ]);
    }
}
