<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Businesscategory extends Model
{
    public function businessuser(){
        return $this->belongsTo(Businessuser::class);
    }
    use HasFactory;
}
