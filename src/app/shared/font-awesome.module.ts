//font awesome icons, centralised
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
  faLightbulb,
  faCompass,
  faChartLine,
  faHistory,
  faMobileScreen,
  faBuilding,
  faCircle,
  faAward,
  faQuoteLeft,
  faQuoteRight,
  faImage,
  faSearch,
  faPhone,
  faSortAlphaDown,
  faSortAlphaUp,
  faFilter,
  faInfoCircle,
  faEnvelope,
  faBriefcase,
  faLocationDot,
  faBell,
  faCheckCircle,
  faExclamationCircle,
  faMessage,
  faIdCard,
  faPaperPlane,
  faMoneyBillTransfer,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faBars,
  faTimes,
  faMoneyBillWave,
  faHandHoldingDollar,
  faHandHoldingHeart,
  faUniversity,
  faDownload,
  faStar,
  faArrowUp,
  faShield,
  faDollarSign,
  faPoundSign,
  faEuroSign,
  faCirclePlay,
  faComments,
  faCreditCard,
  faCode,
  faDirections,
  faUser,
  faArrowDown,
  faHandPointer,
  faSearchLocation,
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontAwesomeIconsModule {
  constructor(library: FaIconLibrary) {
    // Register icons with the library
    // This makes them available to all components using this module
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
      faMapMarkerAlt,
      faLightbulb,
      faCompass,
      faChartLine,
      faHistory,
      faMobileScreen,
      faBuilding,
      faCircle,
      faAward,
      faQuoteLeft,
      faQuoteRight,
      faImage,
      faSearch,
      faPhone,
      faSortAlphaDown,
      faSortAlphaUp,
      faFilter,
      faInfoCircle,
      faEnvelope,
      faBriefcase,
      faLocationDot,
      faBell,
      faCheckCircle,
      faExclamationCircle,
      faMessage,
      faIdCard,
      faPaperPlane,
      faMoneyBillTransfer,
      faChevronDown,
      faChevronLeft,
      faChevronRight,
      faBars,
      faTimes,
      faMoneyBillWave,
      faHandHoldingDollar,
      faHandHoldingHeart,
      faUniversity,
      faDownload,
      faStar,
      faArrowUp,
      faShield,
      faDollarSign,
      faPoundSign,
      faEuroSign,
      faCirclePlay,
      faComments,
      faCreditCard,
      faCode,
      faDirections,
      faUser,
      faApple,
      faGooglePlay,
      faArrowDown,
      faHandPointer,
      faSearchLocation
    );
  }
}
