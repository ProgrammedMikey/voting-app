<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Poll;
use App\Option;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class PollController extends Controller
{

    public function index()
    {
        $poll = Poll::all();

        return response()->json($poll,200);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        if (! $user = JWTAuth::parseToken()->authenticate()){
            return response()->json(['msg' => 'User not found'], 404);
        }
        $user_id = $user-> id;

        $poll = Poll::create([
            'question' => $request->input('title'),
            'user_id' => $user_id
        ]);

//        $input = Input::all();
//        $condition = $request->input('options');
//        for($id = 0; $id<$condition; $id++){
//            $option = new Option;
//            $option->option = $input['options'][$id];
//            $option->save();
//        }

        $option = $request->input('options');
        $options = [];
        for ($i = 0; $i < count($option); $i++) {
            $options[] = new Option([
                'option' => $option[$i],
                'votes' => 1
            ]);
        }
        
        $poll->options()->saveMany($options);


        return response()->json("stored",200);
    }


    public function show($id)
    {
        $poll = Poll::find($id);
        return response()->json($poll,200);
    }


//    public function edit($id)
//    {
//        //
//    }
//
//
//    public function update(Request $request, $id)
//    {
//        //
//    }
//
//
//    public function destroy($id)
//    {
//        //
//    }
}
