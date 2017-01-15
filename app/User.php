<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{

    protected $fillable = [
        'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function polls() {
        return $this->hasMany('Poll');
    }
}
