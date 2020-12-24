<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsertCustomerUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customerUsers', function (Blueprint $table) {
            $table->id()->autoIncrement()->index();
            $table->string('ipaddress')->index();
            $table->string('phone')->index();
            $table->string('verify')->index();
            $table->string('username')->nullable()->index();
            $table->string('password')->nullable()->index();
            $table->string('token')->nullable()->index();
            $table->string('name')->nullable()->index();
            $table->string('family')->nullable()->index();
            $table->string('nationlacode')->nullable()->index();
            $table->string('cartno')->nullable()->index();
            $table->boolean('signin')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customerUsers');
    }
}
