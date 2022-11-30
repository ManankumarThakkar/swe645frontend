// Manankumar Thakkar
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent} from './survey/survey.component';
import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [{path: '', component: HeaderComponent},
{path: 'survey', component: SurveyComponent},
{path: 'acknowledge', component: AcknowledgeComponent},
{path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
