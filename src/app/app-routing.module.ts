import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestpageComponent } from './testpage/testpage.component';

const routes: Routes = [{
  
  path:'',component:TestpageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
