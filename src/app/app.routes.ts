import { Routes } from '@angular/router';
import { DocumentosPlanosComponent } from './pages/documentos-planos/documentos-planos.component';
import { EvaluacionCatastralComponent } from './pages/evaluacion-catastral/evaluacion-catastral.component';
import { EvaluacionObrasPrivadasComponent } from './pages/evaluacion-obras-privadas/evaluacion-obras-privadas.component';
import { MisVisadosComponent } from './pages/mis-visados/mis-visados.component';
import { PrevisadosComponent } from './pages/previsados/previsados.component';
import { VisadosPresentadosComponent } from './pages/visados-presentados/visados-presentados.component';

export const routes: Routes = [
    {   
        path: 'documentos-planos',
        component: DocumentosPlanosComponent,
    },
    {
        path: 'evaluacion-catastral',
        component: EvaluacionCatastralComponent,
    },
    {
        path: 'evaluacion-obras-privadas',
        component: EvaluacionObrasPrivadasComponent,
    },
    {
        path: 'mis-visados',
        component: MisVisadosComponent,
    },
    {
        path: 'previsados',
        component: PrevisadosComponent,
    },
    
    {
        path: 'visados-presentados',
        component: VisadosPresentadosComponent,
    },
    
];
