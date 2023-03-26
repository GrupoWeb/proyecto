<?php

namespace App\Http\Controllers;

use App\Models\Muni;

class MuniController extends Controller
{
    public function findById(int $id): \Illuminate\Http\JsonResponse
    {
        $muni = Muni::select('id as value','name as label')->where(['departments_id'   =>  $id])->get();
        return response()->json($muni);
    }
}
