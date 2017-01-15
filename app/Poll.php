<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Option;

class Poll extends Model
{
    protected  $fillable = ['id','question', 'user_id'];

    public function options() {
        return $this->hasMany('Option');
    }
}
