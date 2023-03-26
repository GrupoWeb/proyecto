<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/user')->group(function(){
    Route::post('register', [App\Http\Controllers\AuthenticationController::class, 'register']);
    Route::post('login', [App\Http\Controllers\AuthenticationController::class, 'login']);
    Route::post('logout', [App\Http\Controllers\AuthenticationController::class, 'logout']);
});

Route::get('departments', [App\Http\Controllers\DepartmentsController::class, 'index'])->middleware('auth:api');
Route::get('muni/{id}', [App\Http\Controllers\MuniController::class, 'findById'])->middleware('auth:api');

Route::resource('/employee','App\Http\Controllers\EmployeesController',['except' => ['create','edit']])->parameters(['employee' => 'id'])->middleware('auth:api');
