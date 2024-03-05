
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
  // {path:'', redirect: '/signup'}
  //     { path: 'signup', component: SignUpComponent }, 
  //     {path: '', component: HomeComponent},// Replace 'SignupComponent' with the actual component for your signup page
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }