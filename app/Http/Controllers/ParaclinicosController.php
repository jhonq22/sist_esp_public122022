<?php

namespace App\Http\Controllers;

use App\Paraclinicos;
use Illuminate\Http\Request;

class ParaclinicosController extends Controller
{
    public function index()
    {
        $vacunados =Paraclinicos::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Paraclinicos();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->anticuerpo_contra_sars_cov2 = $request->input('anticuerpo_contra_sars_cov2');
        $vacunado->fecha_hora_toma_muestra_anticuerpo = $request->input('fecha_hora_toma_muestra_anticuerpo');
        $vacunado->igm = $request->input('igm');
        $vacunado->igg = $request->input('igg');
        $vacunado->prueba_embarazo = $request->input('prueba_embarazo');
        $vacunado->fecha_hora_toma_muestra_antigeno = $request->input('fecha_hora_toma_muestra_antigeno');
        $vacunado->observacion = $request->input('observacion');
        $vacunado->prueba_pcr = $request->input('prueba_pcr');
        $vacunado->fecha_hora_toma_muestra_pcr = $request->input('fecha_hora_toma_muestra_pcr');
        $vacunado->hgb = $request->input('hgb');
        $vacunado->serologias = $request->input('serologias');
        $vacunado->vih = $request->input('vih');
        $vacunado->vdrl = $request->input('vdrl');
        $vacunado->hepatitisb = $request->input('hepatitisb');
        $vacunado->hepatitisc = $request->input('hepatitisc');
        $vacunado->radiografia_torax = $request->input('radiografia_torax');



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =Paraclinicos::find($espromed_id);
        $vacunados =Paraclinicos::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Paraclinicos::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->anticuerpo_contra_sars_cov2 = $request->input('anticuerpo_contra_sars_cov2');
        $vacunado->fecha_hora_toma_muestra_anticuerpo = $request->input('fecha_hora_toma_muestra_anticuerpo');
        $vacunado->igm = $request->input('igm');
        $vacunado->igg = $request->input('igg');
        $vacunado->prueba_embarazo = $request->input('prueba_embarazo');
        $vacunado->fecha_hora_toma_muestra_antigeno = $request->input('fecha_hora_toma_muestra_antigeno');
        $vacunado->observacion = $request->input('observacion');
        $vacunado->prueba_pcr = $request->input('prueba_pcr');
        $vacunado->fecha_hora_toma_muestra_pcr = $request->input('fecha_hora_toma_muestra_pcr');
        $vacunado->hgb = $request->input('hgb');
        $vacunado->serologias = $request->input('serologias');
        $vacunado->vih = $request->input('vih');
        $vacunado->vdrl = $request->input('vdrl');
        $vacunado->hepatitisb = $request->input('hepatitisb');
        $vacunado->hepatitisc = $request->input('hepatitisc');
        $vacunado->radiografia_torax = $request->input('radiografia_torax');

      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Paraclinicos::find($espromed_id);
        $vacunado->delete();
    }
}
