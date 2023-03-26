<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Departments;

class DepartmentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $departments = [
            [
                'name'  => 'Guatemala'
            ],
            [
                'name'  => 'El Progreso'
            ],
            [
                'name'  => 'Sacatepéquez'
            ],
            [
                'name'  => 'Chimaltenango'
            ],
            [
                'name'  => 'Escuintla'
            ],
            [
                'name'  => 'Santa Rosa'
            ],
            [
                'name'  => 'Sololá'
            ],
            [
                'name'  => 'Totonicapán'
            ],
            [
                'name'  => 'Quetzaltenango'
            ],
            [
                'name'  => 'Suchitepéquez'
            ],
            [
                'name'  => 'Retalhuleu'
            ],
            [
                'name'  => 'San Marcos'
            ],
            [
                'name'  => 'Huehuetenango'
            ],
            [
                'name'  => 'Quiché'
            ],
            [
                'name'  => 'Baja Vera,paz'
            ],
            [
                'name'  => 'Alta Vera,paz'
            ],
            [
                'name'  => 'Petén'
            ],
            [
                'name'  => 'Izabal'
            ],
            [
                'name'  => 'Zacapa'
            ],
            [
                'name'  => 'Chiquimula'
            ],
            [
                'name'  => 'Jalapa'
            ],
            [
                'name'  => 'Jutiapa'
            ]
        ];

        foreach ($departments as $dep) {
            Departments::create($dep);
        }
    }
}
