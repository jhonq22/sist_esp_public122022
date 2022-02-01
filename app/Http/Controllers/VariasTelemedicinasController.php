<?php

namespace App\Http\Controllers;

use App\VariasTelemedicinas;
use Illuminate\Http\Request;

class VariasTelemedicinasController extends Controller
{
    public function index()
    {
        $vacunados =VariasTelemedicinas::get();
        echo json_encode($vacunados);
    }

    public function store(Request $request)
    {
        $vacunado = new VariasTelemedicinas();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->campo_telemedicina = $request->input('campo_telemedicina');


        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =VariasTelemedicinas::find($espromed_id);
        $vacunados =VariasTelemedicinas::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }

    public function update(Request $request, $espromed_id)
    {
        $vacunado =VariasTelemedicinas::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->campo_telemedicina = $request->input('campo_telemedicina');
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }


    public function destroy($espromed_id)
    {
        $vacunado =VariasTelemedicinas::find($espromed_id);
        $vacunado->delete();
    }

}
