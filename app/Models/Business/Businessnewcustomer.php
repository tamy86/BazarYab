<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Businessnewcustomer extends Model
{

    public function businessuser(){
        return $this->belongsToMany(Businessuser::class);
    }
    use HasFactory;
}
