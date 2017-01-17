<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Poll;
use App\Option;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class OptionController extends Controller
{

    public function incrementVote($id){
        $option = Option::find($id);
        $option->votes = ($option->votes + 1);
        $option->save();
    }

}
