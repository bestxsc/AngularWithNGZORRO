import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { FooterListComponent } from './footer-list/footer-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagItemComponent } from './tag-item/tag-item.component';
import {RouterModule, Routes} from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MettingPageComponent } from './metting-page/metting-page.component';
import { MettingPageContentComponent } from './metting-page-content/metting-page-content.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { TitleComponent } from './title/title.component';
import { ArticleComponent } from './articlelist/article/article.component';
import { FeatureComponent } from './feature/feature.component';

registerLocaleData(zh);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'metting', component: MettingPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'feature', component: FeatureComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    FooterListComponent,
    MainPageComponent,
    TagListComponent,
    TagItemComponent,
    MettingPageComponent,
    MettingPageContentComponent,
    AboutPageComponent,
    ArticlelistComponent,
    TitleComponent,
    ArticleComponent,
    FeatureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
