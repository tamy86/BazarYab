<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Businessuser extends Model
{
    public function businesscategories()
    {
        return $this->hasMany(Businesscategory::class);
    }
    use HasFactory;

}
