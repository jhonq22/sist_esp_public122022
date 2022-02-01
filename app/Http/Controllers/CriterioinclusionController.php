<?php

namespace App\Http\Controllers;

use App\Criterioinclusion;
use Illuminate\Http\Request;

class CriterioinclusionController extends Controller
{
    public function index()
    {
        $vacunados =Criterioinclusion::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Criterioinclusion();
        $vacunado->paciente_id = $request->input('paciente_id');
       $vacunado->criterioin1 = $request->input('criterioin1');
       $vacunado->criterioin2 = $request->input('criterioin2');
       $vacunado->criterioin3 = $request->input('criterioin3');
       $vacunado->criterioin4 = $request->input('criterioin4');
       $vacunado->criterioin5 = $request->input('criterioin5');
       $vacunado->criterioin6 = $request->input('criterioin6');
       $vacunado->criterioin7 = $request->input('criterioin7');
       $vacunado->criterioin8 = $request->input('criterioin8');
       $vacunado->criterioin9 = $request->input('criterioin9');
       $vacunado->criterioin10 = $request->input('criterioin10');
       $vacunado->criterioin11 = $request->input('criterioin11');
       $vacunado->criterioin12 = $request->input('criterioin12');
       $vacunado->criterioin13 = $request->input('criterioin13');
     
      



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =Criterioinclusion::find($espromed_id);
        $vacunados =Criterioinclusion::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Criterioinclusion::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->criterioin1 = $request->input('criterioin1');
       $vacunado->criterioin2 = $request->input('criterioin2');
       $vacunado->criterioin3 = $request->input('criterioin3');
       $vacunado->criterioin4 = $request->input('criterioin4');
       $vacunado->criterioin5 = $request->input('criterioin5');
       $vacunado->criterioin6 = $request->input('criterioin6');
       $vacunado->criterioin7 = $request->input('criterioin7');
       $vacunado->criterioin8 = $request->input('criterioin8');
       $vacunado->criterioin9 = $request->input('criterioin9');
       $vacunado->criterioin10 = $request->input('criterioin10');
       $vacunado->criterioin11 = $request->input('criterioin11');
       $vacunado->criterioin12 = $request->input('criterioin12');
       $vacunado->criterioin13 = $request->input('criterioin13');
      
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Criterioinclusion::find($espromed_id);
        $vacunado->delete();
    }
}
