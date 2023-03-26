<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
       $employees = Employee::selectRaw('id, concat(firstName , " ", secondName, " ", surname, " ",  secondSurname) as fullName,firstName , secondName, surname, secondSurname,workerPhoneNumber,workerEmail, workerAddress, nit, identification, date_of_birth, gender, marital_status, igss')->get();
       return response()->json($employees, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */

    public function store(Request $request): Response
    {
        request()->validate(Employee::$rules);

        $employee = Employee::create($request->all());

        return response()->json($employee, Response::HTTP_OK);
    }


    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */

    public function show(int $id): Response
    {
        $employees = Employee::find($id);

        return response()->json($employees, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Employee $employee
     * @param $id
     * @return Response
     */

    public function update(Request $request, Employee $employee, $id): Response
    {
        $existe = Employee::find($id);
        if($existe != null){
            request()->validate(Employee::$rules);

            $employee->find($id)->update($request->all());

            return response()->json(["message" => 'Actualizado correctamente'],Response::HTTP_OK);
        }else{
            return response()->json(["message" => 'no se encontro un usuario con el ID ' . $id],Response::HTTP_OK);
        }
    }

    /**
     * @param int $id
     * @return Response
     */

    public function destroy(int $id): Response
    {
        $employee = Employee::find($id)->delete();

        return response()->json($employee, Response::HTTP_OK);
    }

}
