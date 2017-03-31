import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DiscoverPage }from '../pages/discover/discover';
import { ChatboundaryPage } from '../pages/chatboundary/chatboundary';
import { TabsPage } from '../pages/tabs/tabs';

import { Getuserlist } from '../providers/getuserlist';
import { ConnectionServices } from '../providers/connectionservices';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DiscoverPage,
    ChatboundaryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      platforms: {
        ios: {
          backButtonText: ""
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DiscoverPage,
    ChatboundaryPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Getuserlist,
    ConnectionServices
  ]
})
export class AppModule { }
