import { Routes } from '@angular/router';
import { Home } from './main/pages/home/home';
import { SingleProject } from './main/pages/single-project/single-project';
import { LegalNotice } from './main/pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './main/pages/privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "projects/:slug", component: SingleProject },
    { path: "legal-notice", component: LegalNotice },
    { path: "privacy-policy", component: PrivacyPolicy },
    { path: "**", redirectTo: "" }
];
