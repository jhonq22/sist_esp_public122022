<?php

namespace App\Http\Controllers;

use App\VisitaDos;
use Illuminate\Http\Request;

class VisitaDosController extends Controller
{
    public function index()
    {
        $vacunados =VisitaDos::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new VisitaDos();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->pre_ta = $request->input('pre_ta');
        $vacunado->pre_fr = $request->input('pre_fr');
        $vacunado->pre_fc = $request->input('pre_fc');
        $vacunado->pre_temp = $request->input('pre_temp'); 
        $vacunado->pre_sat2 = $request->input('pre_sat2');
        $vacunado->pre_general = $request->input('pre_general');  
        $vacunado->pre_cabeza = $request->input('pre_cabeza');
        $vacunado->pre_cuello = $request->input('pre_cuello'); 
        $vacunado->pre_linfatico = $request->input('pre_linfatico'); 
        $vacunado->pre_torax = $request->input('pre_torax'); 
        $vacunado->pre_abdomen = $request->input('pre_abdomen'); 
        $vacunado->pre_extremidades = $request->input('pre_extremidades');
        $vacunado->pre_neurologico = $request->input('pre_neurologico');
        $vacunado->post_ta = $request->input('post_ta');
        $vacunado->post_fc = $request->input('post_fc');
        $vacunado->post_fr = $request->input('post_fr');
        $vacunado->post_temp = $request->input('post_temp'); 
        $vacunado->post_sat2 = $request->input('post_sat2');
        $vacunado->post_general = $request->input('post_general');  
        $vacunado->post_cabeza = $request->input('post_cabeza');
        $vacunado->post_cuello = $request->input('post_cuello');
        $vacunado->post_linfatico = $request->input('post_linfatico'); 
        $vacunado->post_torax = $request->input('post_torax'); 
        $vacunado->post_abdomen = $request->input('post_abdomen'); 
        $vacunado->post_extremidades = $request->input('post_extremidades');
        $vacunado->post_neurologico = $request->input('post_neurologico');
        $vacunado->vacuna = $request->input('vacuna');
        $vacunado->fecha_vacuna = $request->input('fecha_vacuna');
        $vacunado->lote_vacuna = $request->input('lote_vacuna');
        $vacunado->hora_vacuna = $request->input('hora_vacuna');
        $vacunado->reaccion_vacuna = $request->input('reaccion_vacuna');
        $vacunado->tipo_reaccion = $request->input('tipo_reaccion');
        

        $vacunado->datos_pre_ta = $request->input('datos_pre_ta');
        $vacunado->datos_pre_fr = $request->input('datos_pre_fr');
        $vacunado->datos_pre_fc = $request->input('datos_pre_fc');
        $vacunado->datos_pre_temp = $request->input('datos_pre_temp'); 
        $vacunado->datos_pre_sat2 = $request->input('datos_pre_sat2');


        $vacunado->datos_post_ta = $request->input('datos_post_ta');
        $vacunado->datos_post_fc = $request->input('datos_post_fc');
        $vacunado->datos_post_fr = $request->input('datos_post_fr');
        $vacunado->datos_post_temp = $request->input('datos_post_temp'); 
        $vacunado->datos_post_sat2 = $request->input('datos_post_sat2');
      



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =VisitaDos::find($espromed_id);
        $vacunados =VisitaDos::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =VisitaDos::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->pre_fc = $request->input('pre_fc');
        $vacunado->pre_temp = $request->input('pre_temp'); 
        $vacunado->pre_sat2 = $request->input('pre_sat2');
        $vacunado->pre_general = $request->input('pre_general');  
        $vacunado->pre_cabeza = $request->input('pre_cabeza');
        $vacunado->pre_cuello = $request->input('pre_cuello'); 
        $vacunado->pre_linfatico = $request->input('pre_linfatico'); 
        $vacunado->pre_torax = $request->input('pre_torax'); 
        $vacunado->pre_abdomen = $request->input('pre_abdomen'); 
        $vacunado->pre_extremidades = $request->input('pre_extremidades');
        $vacunado->pre_neurologico = $request->input('pre_neurologico');
        $vacunado->post_ta = $request->input('post_ta');
        $vacunado->post_fc = $request->input('post_fc');
        $vacunado->post_fr = $request->input('post_fr');
        $vacunado->post_temp = $request->input('post_temp'); 
        $vacunado->post_sat2 = $request->input('post_sat2');
        $vacunado->post_general = $request->input('post_general');  
        $vacunado->post_cabeza = $request->input('post_cabeza');
        $vacunado->post_cuello = $request->input('post_cuello');
        $vacunado->post_linfatico = $request->input('post_linfatico'); 
        $vacunado->post_torax = $request->input('post_torax'); 
        $vacunado->post_abdomen = $request->input('post_abdomen'); 
        $vacunado->post_extremidades = $request->input('post_extremidades');
        $vacunado->post_neurologico = $request->input('post_neurologico');
        $vacunado->vacuna = $request->input('vacuna');
        $vacunado->fecha_vacuna = $request->input('fecha_vacuna');
        $vacunado->lote_vacuna = $request->input('lote_vacuna');
        $vacunado->hora_vacuna = $request->input('hora_vacuna');
        $vacunado->reaccion_vacuna = $request->input('reaccion_vacuna');
        $vacunado->tipo_reaccion = $request->input('tipo_reaccion');

        $vacunado->datos_pre_ta = $request->input('datos_pre_ta');
        $vacunado->datos_pre_fr = $request->input('datos_pre_fr');
        $vacunado->datos_pre_fc = $request->input('datos_pre_fc');
        $vacunado->datos_pre_temp = $request->input('datos_pre_temp'); 
        $vacunado->datos_pre_sat2 = $request->input('datos_pre_sat2');


        $vacunado->datos_post_ta = $request->input('datos_post_ta');
        $vacunado->datos_post_fc = $request->input('datos_post_fc');
        $vacunado->datos_post_fr = $request->input('datos_post_fr');
        $vacunado->datos_post_temp = $request->input('datos_post_temp'); 
        $vacunado->datos_post_sat2 = $request->input('datos_post_sat2');
        
      
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =VisitaDos::find($espromed_id);
        $vacunado->delete();
    }
   
}
