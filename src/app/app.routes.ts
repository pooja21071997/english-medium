import { Routes } from '@angular/router';
import { Admissions } from './pages/admissions/admissions';
import { ContactUs } from './pages/contact-us/contact-us';
import { Academics } from './pages/academics/academics';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Facilities } from './pages/facilities/facilities';
import { EducationalFacilities } from './pages/facilities/educational-facilities/educational-facilities';
import { CounsellingCenter } from './pages/facilities/counselling-center/counselling-center';
import { SportsFacilities } from './pages/facilities/sports-facilities/sports-facilities';
import { MultipurposeHall } from './pages/facilities/multipurpose-hall/multipurpose-hall';
import { TransportFacilities } from './pages/facilities/transport-facilities/transport-facilities';
import { PrePrimary } from './pages/academics/pre-primary/pre-primary';
import { PrimaryAndSecondary } from './pages/academics/primary-and-secondary/primary-and-secondary';

export const routes: Routes = [
    { path: '', component: Home },

  { path: 'home', component: Home },
  { path: 'about', component: About },
   {
    path: 'academics',
    component: Academics,
    children: [
      { path: 'pre-primary', component: PrePrimary },
      { path: 'primary-and-secondary', component: PrimaryAndSecondary }
    ]
  },
  { path: 'admissions', component: Admissions },
  { path: 'contact-us', component: ContactUs },

  {
    path: 'facilities',
    component: Facilities,
    children: [
      { path: 'educational-facilities', component: EducationalFacilities },
      { path: 'counselling-center', component: CounsellingCenter },
      { path: 'sports-facilities', component: SportsFacilities },
      { path: 'multipurpose-hall', component: MultipurposeHall },
      { path: 'transport-facilities', component: TransportFacilities },
      { path: '', redirectTo: 'educational-facilities', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: '' }

];
