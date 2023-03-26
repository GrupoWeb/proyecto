<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Symfony\Component\HttpFoundation\Response;

class AuthenticationController extends Controller
{

    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $loginValidate = $request->validate([
            'email' =>  'email|required',
            'password'  => 'required'
        ]);

         if (!Auth::attempt($loginValidate))
             return response()->json([
                 'message' => 'Invalid Credentials'
             ], 401);

        $accessToken = Auth::user()->createToken('Personal Access Token');
        $tokenExpires = $accessToken->token;
        return response()->json([
            'user_id' => Auth()->user(),
            'access_token' => $accessToken->accessToken,
            'token_type' => 'Bearer',
            'expires_at'    =>  Carbon::parse(
                $tokenExpires->token
            )

        ]);
    }

    public function validateEmail(String $email): bool
    {
        $validate = User::where(['email' => $email])->first();
        if($validate != null){
            return true;
        }else{
            return false;
        }
    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        if(!$this->validateEmail($request->email)){
            $data = $request->validate([
                'username' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8'],
            ]);


            $data['password'] = Hash::make($request->password);

            $user = User::create($data);

            $accessToken = $user->createToken('authToken')->accessToken;

            return response()->json([
                'user'  => $user,
                'access_token'  => $accessToken], 201);
        }else{
            return response()->json("ya existe el usuario", Response::HTTP_OK);
        }
    }

    public function logout(): \Illuminate\Http\JsonResponse
    {
        if (Auth::check()) {
            $token = Auth::user()->token();
            $token->revoke();
        }

        return response()->json([
            'message' => 'You have successfully logout!'
        ]);
    }

}
