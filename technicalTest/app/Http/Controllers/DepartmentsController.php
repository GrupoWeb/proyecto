<?php

namespace App\Http\Controllers;

use App\Models\Departments;

class DepartmentsController extends Controller
{
    public function index(){
        return response()->json(Departments::select('id as value','name as label')->get(),200);
    }
}
