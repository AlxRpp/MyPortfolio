import { Routes } from '@angular/router';
import { Home } from './main/pages/home/home';
import { SingleProject } from './main/pages/single-project/single-project';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "projects/:slug", component: SingleProject },
    { path: "**", redirectTo: "" }
];
