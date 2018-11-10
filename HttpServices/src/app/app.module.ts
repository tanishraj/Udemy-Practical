import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { GettingDataComponent } from './getting-data/getting-data.component';
import { CreatingDataComponent } from './creating-data/creating-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { SeperationOfConcernComponent } from './seperation-of-concern/seperation-of-concern.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    GettingDataComponent,
    CreatingDataComponent,
    UpdateDataComponent,
    DeleteDataComponent,
    NgOnInitComponent,
    SeperationOfConcernComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
