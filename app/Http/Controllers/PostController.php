<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class PostController extends Controller
{
//    public function __construct()
//    {
//        $this->middleware('jwt.auth', ['only' =>[
//         'update', 'store', 'destroy'
//    ]]);
//    }

    public function index(){

        $posts = Post::all();

        return response()->json($posts,200);
    }


    public function store(Request $request){

        if (! $user = JWTAuth::parseToken()->authenticate()){
            return response()->json(['msg' => 'User not found'], 404);
        }

        $user_id = $user-> id;

        $post = Post::create([
            'title' => $request->input("title"),
            'body' => $request->input('body'),
            'user_id' => $user_id
        ]);

        return response()->json("stored",200);

    }

        public function show ($id){
            $post = Post::find($id);
            return response()->json($post,200);
        }

        public function edit ($id){
            $post = Post::find($id);
            return response()->json($post,200);
        }

        public function update($id,Request $request)
        {
         $post = Post::find($id);   
        $post->update([
            'title' => $request->input("title"),
             'body' => $request->input('body'),
             'user_id' => 1
        ]);
        return response()->json("UPDATED",200);
        }
        
    public function destroy($id){
        $post = Post::find($id);
        $post->delete();
        return response()->json("DELETED",200); }


}

