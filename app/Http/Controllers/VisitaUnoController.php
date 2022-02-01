<?php

namespace App\Http\Controllers;

use App\VisitaUno;
use Illuminate\Http\Request;

class VisitaUnoController extends Controller
{
    public function index()
    {
        $vacunados =VisitaUno::get();
        echo json_encode($vacunados);
    }

    public function store(Request $request)
    {
        $vacunado = new VisitaUno();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->vacuna_previa_sars_cov2 = $request->input('vacuna_previa_sars_cov2');
        $vacunado->fecha_ultima_dosis = $request->input('fecha_ultima_dosis');
        $vacunado->hta = $request->input('hta');
        $vacunado->asma = $request->input('asma');
        $vacunado->dm = $request->input('dm');
        $vacunado->artritis = $request->input('artritis');
        $vacunado->tbc = $request->input('tbc');
        $vacunado->hepatitis = $request->input('hepatitis');
        $vacunado->vih_sida = $request->input('vih_sida');
        $vacunado->otras = $request->input('otras');
        $vacunado->alergias = $request->input('alergias');
        $vacunado->reaccion_vacuna = $request->input('reaccion_vacuna');
        $vacunado->signo_ta = $request->input('signo_ta');
        $vacunado->signo_fc = $request->input('signo_fc');
        $vacunado->signo_fr = $request->input('signo_fr');
        $vacunado->signo_tmp = $request->input('signo_tmp');
        $vacunado->signo_sat2 = $request->input('signo_sat2');
        $vacunado->examenf_general = $request->input('examenf_general');
        $vacunado->examenf_cabeza = $request->input('examenf_cabeza');
        $vacunado->examenf_cuello = $request->input('examenf_cuello');
        $vacunado->examenf_sistema_linfatico = $request->input('examenf_sistema_linfatico');
        $vacunado->examenf_torax = $request->input('examenf_torax');
        $vacunado->examenf_abdomen = $request->input('examenf_abdomen');
        $vacunado->examenf_extremidades = $request->input('examenf_extremidades');
        $vacunado->examenf_neurologico = $request->input('examenf_neurologico');
        $vacunado->otros = $request->input('otros');
        $vacunado->pcr_sars_cov2 = $request->input('pcr_sars_cov2');
        $vacunado->vacunacion_previa = $request->input('vacunacion_previa');
        $vacunado->lote1 = $request->input('lote1');
        $vacunado->lote2 = $request->input('lote2');
        $vacunado->fecha_dosis1 = $request->input('fecha_dosis1');
        $vacunado->fecha_dosis2 = $request->input('fecha_dosis2');
        $vacunado->datos_signo_ta = $request->input('datos_signo_ta');
        $vacunado->datos_signo_fc = $request->input('datos_signo_fc');
        $vacunado->datos_signo_fr = $request->input('datos_signo_fr');
        $vacunado->datos_signo_tmp = $request->input('datos_signo_tmp');
        $vacunado->datos_signo_sat2 = $request->input('datos_signo_sat2');





        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =VisitaUno::find($espromed_id);
        $vacunados =VisitaUno::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }

    public function update(Request $request, $espromed_id)
    {
        $vacunado =VisitaUno::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->fecha_ultima_dosis = $request->input('fecha_ultima_dosis');
        $vacunado->hta = $request->input('hta');
        $vacunado->asma = $request->input('asma');
        $vacunado->dm = $request->input('dm');
        $vacunado->artritis = $request->input('artritis');
        $vacunado->tbc = $request->input('tbc');
        $vacunado->hepatitis = $request->input('hepatitis');
        $vacunado->vih_sida = $request->input('vih_sida');
        $vacunado->otras = $request->input('otras');
        $vacunado->alergias = $request->input('alergias');
        $vacunado->reaccion_vacuna = $request->input('reaccion_vacuna');
        $vacunado->signo_ta = $request->input('signo_ta');
        $vacunado->signo_fc = $request->input('signo_fc');
        $vacunado->signo_fr = $request->input('signo_fr');
        $vacunado->signo_tmp = $request->input('signo_tmp');
        $vacunado->signo_sat2 = $request->input('signo_sat2');
        $vacunado->examenf_general = $request->input('examenf_general');
        $vacunado->examenf_cabeza = $request->input('examenf_cabeza');
        $vacunado->examenf_cuello = $request->input('examenf_cuello');
        $vacunado->examenf_sistema_linfatico = $request->input('examenf_sistema_linfatico');
        $vacunado->examenf_torax = $request->input('examenf_torax');
        $vacunado->examenf_abdomen = $request->input('examenf_abdomen');
        $vacunado->examenf_extremidades = $request->input('examenf_extremidades');
        $vacunado->examenf_neurologico = $request->input('examenf_neurologico');
        $vacunado->otros = $request->input('otros');
        $vacunado->pcr_sars_cov2 = $request->input('pcr_sars_cov2');
        $vacunado->vacunacion_previa = $request->input('vacunacion_previa');
        $vacunado->lote1 = $request->input('lote1');
        $vacunado->lote2 = $request->input('lote2');
        $vacunado->fecha_dosis1 = $request->input('fecha_dosis1');
        $vacunado->fecha_dosis2 = $request->input('fecha_dosis2');
        $vacunado->datos_signo_ta = $request->input('datos_signo_ta');
        $vacunado->datos_signo_fc = $request->input('datos_signo_fc');
        $vacunado->datos_signo_fr = $request->input('datos_signo_fr');
        $vacunado->datos_signo_tmp = $request->input('datos_signo_tmp');
        $vacunado->datos_signo_sat2 = $request->input('datos_signo_sat2');

        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =VisitaUno::find($espromed_id);
        $vacunado->delete();
    }
}
