<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class Employee
 *
 * @property $id
 * @property $firstName
 * @property $secondNane
 * @property $surname
 * @property $secondSurname
 * @property $workerPhoneNumber
 * @property $workerEmail
 * @property $workerAddress
 * @property $departments_id
 * @property $munis_id
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin Builder
 */


class Employee extends Model
{
    use HasFactory;

    static array $rules = [
        'firstName' =>  'required',
        'secondName' =>  'required',
        'surname' =>  'required',
        'secondSurname' =>  'required',
        'workerEmail' =>  'required',
        'workerAddress' =>  'required',
        'workerPhoneNumber' =>  'required',
        'departments_id' =>  'required',
        'munis_id' =>  'required',
        'gender' =>  'required',
        'marital_status' =>  'required',
        'identification' =>  'required'
    ];

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstName',
        'secondName',
        'surname',
        'secondSurname',
        'workerPhoneNumber',
        'workerEmail',
        'workerAddress',
        'nit',
        'identification',
        'date_of_birth',
        'gender',
        'marital_status',
        'igss',
        'departments_id',
        'munis_id'
    ];

    protected $perPage = 20;
}
