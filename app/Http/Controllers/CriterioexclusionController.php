<?php

namespace App\Http\Controllers;

use App\Criterioexclusion;
use Illuminate\Http\Request;

class CriterioexclusionController extends Controller
{
    public function index()
    {
        $vacunados =Criterioexclusion::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Criterioexclusion();
        $vacunado->paciente_id = $request->input('paciente_id');
       $vacunado->criterioex1 = $request->input('criterioex1');
       $vacunado->criterioex2 = $request->input('criterioex2');
       $vacunado->criterioex3 = $request->input('criterioex3');
       $vacunado->criterioex4 = $request->input('criterioex4');
       $vacunado->criterioex5 = $request->input('criterioex5');
       $vacunado->criterioex6 = $request->input('criterioex6');
       $vacunado->criterioex7 = $request->input('criterioex7');
       $vacunado->criterioex8 = $request->input('criterioex8');
       $vacunado->criterioex9 = $request->input('criterioex9');
       $vacunado->criterioex10 = $request->input('criterioex10');
       $vacunado->criterioex11 = $request->input('criterioex11');
       $vacunado->criterioex12 = $request->input('criterioex12');
       $vacunado->criterioex13 = $request->input('criterioex13');
       $vacunado->criterioex14 = $request->input('criterioex14');
       $vacunado->criterioex15 = $request->input('criterioex15');
     
      



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =Criterioexclusion::find($espromed_id);
        $vacunados =Criterioexclusion::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Criterioexclusion::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->criterioex1 = $request->input('criterioex1');
        $vacunado->criterioex2 = $request->input('criterioex2');
        $vacunado->criterioex3 = $request->input('criterioex3');
        $vacunado->criterioex4 = $request->input('criterioex4');
        $vacunado->criterioex5 = $request->input('criterioex5');
        $vacunado->criterioex6 = $request->input('criterioex6');
        $vacunado->criterioex7 = $request->input('criterioex7');
        $vacunado->criterioex8 = $request->input('criterioex8');
        $vacunado->criterioex9 = $request->input('criterioex9');
        $vacunado->criterioex10 = $request->input('criterioex10');
        $vacunado->criterioex11 = $request->input('criterioex11');
        $vacunado->criterioex12 = $request->input('criterioex12');
        $vacunado->criterioex13 = $request->input('criterioex13');
        $vacunado->criterioex14 = $request->input('criterioex14');
        $vacunado->criterioex15 = $request->input('criterioex15');
      
      
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Criterioexclusion::find($espromed_id);
        $vacunado->delete();
    }
}
