<?php

use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;


Route::get('/', function (){
    return view('welcome');
});


Route::group(['prefix' => 'api'], function(){
    Route::resource('posts', 'PostController');

    Route::get('userinfo', function () {
        return JWTAuth::parseToken()->authenticate();
    });

    Route::post('register',[
        'uses' => 'AuthenticateController@register'
    ]);

    Route::post('login',[
        'uses' => 'AuthenticateController@authenticate'
    ]);

});


