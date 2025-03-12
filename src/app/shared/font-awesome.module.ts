import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faHandshake,
  faShieldHalved,
  faBolt,
  faUsers,
  faGlobe,
  faHeart,
  faArrowRight,
  faCheck,
  faClock,
  faMoneyBill,
  faLock,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontAwesomeIconsModule {
  constructor(library: FaIconLibrary) {
    // Add icons to the library for convenient access in components
    library.addIcons(
      faHandshake,
      faShieldHalved,
      faBolt,
      faUsers,
      faGlobe,
      faHeart,
      faArrowRight,
      faCheck,
      faClock,
      faMoneyBill,
      faLock,
      faMapMarkerAlt
    );
  }
}
