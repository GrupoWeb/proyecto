<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string("firstName");
            $table->string("secondName");
            $table->string("surname");
            $table->string("secondSurname");
            $table->integer("workerPhoneNumber");
            $table->string("workerEmail")->unique();
            $table->string("workerAddress");
            $table->string('nit')->nullable()->comment('NIT');
            $table->bigInteger('identification')->nullable()->comment('DPI');
            $table->date('date_of_birth')->nullable()->comment('Fecha de Nacimiento');
            $table->string('gender',2)->nullable()->comment('Género');
            $table->string('marital_status')->nullable()->comment('Estado Civil');
            $table->bigInteger('igss')->nullable()->comment('IGSS');
            $table->unsignedBigInteger("departments_id");
            $table->foreign("departments_id")->references("id")->on("departments");
            $table->unsignedBigInteger("munis_id");
            $table->foreign("munis_id")->references("id")->on("munis");
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
        Schema::dropIfExists('employees');
    }
}
