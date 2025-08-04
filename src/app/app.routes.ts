import { Routes } from '@angular/router';
import { DocumentosPlanosComponent } from './pages/documentos-planos/documentos-planos.component';
import { EvaluacionCatastralComponent } from './pages/evaluacion-catastral/evaluacion-catastral.component';
import { EvaluacionObrasPrivadasComponent } from './pages/evaluacion-obras-privadas/evaluacion-obras-privadas.component';
import { MisVisadosComponent } from './pages/mis-visados/mis-visados.component';
import { PrevisadosComponent } from './pages/previsados/previsados.component';
import { VisadosPresentadosComponent } from './pages/visados-presentados/visados-presentados.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: { label: 'Home' }
    },
    {   
        path: 'documentos-planos',
        component: DocumentosPlanosComponent,
        data: { label: 'Documentos y Planos' }
    },
    {
        path: 'evaluacion-catastral',
        component: EvaluacionCatastralComponent,
        data: { label: 'Evaluación Catastral' }
    },
    {
        path: 'evaluacion-obras-privadas',
        component: EvaluacionObrasPrivadasComponent,
        data: { label: 'Evaluación Obras Privadas' }
    },
    {
        path: 'mis-visados',
        component: MisVisadosComponent,
        data: { label: 'Mis Visados' }
    },
    {
        path: 'previsados',
        component: PrevisadosComponent,
        data: { label: 'Previsados' }
    },
    {
        path: 'visados-presentados',
        component: VisadosPresentadosComponent,
        data: { label: 'Visados Presentados' }
    },
    { path: '**', redirectTo: '' }
];
