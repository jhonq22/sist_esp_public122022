<?php

namespace App\Http\Controllers;

use App\Examenfisico;
use Illuminate\Http\Request;

class ExamenfisicoController extends Controller
{
    public function index()
    {
        $vacunados =Examenfisico::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Examenfisico();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->temperatura = $request->input('temperatura');
        $vacunado->presion_arterial = $request->input('presion_arterial');
        $vacunado->frecuencia_cardiaca = $request->input('frecuencia_cardiaca');
        $vacunado->frecuencia_respiratoria = $request->input('frecuencia_respiratoria');
        $vacunado->peso = $request->input('peso');
        $vacunado->talla = $request->input('talla');
        $vacunado->imc = $request->input('imc');
        $vacunado->piel = $request->input('piel');
        $vacunado->musculo_esqueletico = $request->input('musculo_esqueletico');
        $vacunado->cabeza_cuello = $request->input('cabeza_cuello');
        $vacunado->ojos = $request->input('ojos');
        $vacunado->nariz = $request->input('nariz');
        $vacunado->boca = $request->input('boca');
        $vacunado->oidos = $request->input('oidos');
        $vacunado->torax = $request->input('torax');
        $vacunado->abdomen = $request->input('abdomen');
        $vacunado->neurologico = $request->input('neurologico');
        $vacunado->linfatico = $request->input('linfatico');



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =Examenfisico::find($espromed_id);
        $vacunados =Examenfisico::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Examenfisico::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->temperatura = $request->input('temperatura');
        $vacunado->presion_arterial = $request->input('presion_arterial');
        $vacunado->frecuencia_cardiaca = $request->input('frecuencia_cardiaca');
        $vacunado->frecuencia_respiratoria = $request->input('frecuencia_respiratoria');
        $vacunado->peso = $request->input('peso');
        $vacunado->talla = $request->input('talla');
        $vacunado->imc = $request->input('imc');
        $vacunado->piel = $request->input('piel');
        $vacunado->musculo_esqueletico = $request->input('musculo_esqueletico');
        $vacunado->cabeza_cuello = $request->input('cabeza_cuello');
        $vacunado->ojos = $request->input('ojos');
        $vacunado->nariz = $request->input('nariz');
        $vacunado->boca = $request->input('boca');
        $vacunado->oidos = $request->input('oidos');
        $vacunado->torax = $request->input('torax');
        $vacunado->abdomen = $request->input('abdomen');
        $vacunado->neurologico = $request->input('neurologico');
        $vacunado->linfatico = $request->input('linfatico');
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Examenfisico::find($espromed_id);
        $vacunado->delete();
    }
}
