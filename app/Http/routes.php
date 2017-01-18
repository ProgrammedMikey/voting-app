<?php

use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;


Route::get('/', function (){
    return view('welcome');
});


Route::group(['prefix' => 'api'], function(){
    Route::resource('posts', 'PostController');

    Route::resource('option', 'OptionController', [
        'only' => ['index','store', 'show']
    ]);

    Route::resource('poll', 'PollController', [
        'only' => ['index','store', 'show']
    ]);

    Route::get('userinfo', function () {
        return JWTAuth::parseToken()->authenticate();
    });

    Route::post('register',[
        'uses' => 'AuthenticateController@register'
    ]);

    Route::post('login',[
        'uses' => 'AuthenticateController@authenticate'
    ]);
    Route::post('option/{id}', [
        'uses' => 'OptionController@incrementVote'
    ]);

});

Route::post('user',[
        'uses' => 'AuthController@store'
    ]);

Route::post('user/signin',[
        'uses' => 'AuthController@create'
    ]);




