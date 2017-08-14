import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostNeeds } from './post-needs';

@NgModule({
  declarations: [
    PostNeeds,
  ],
  imports: [
    IonicPageModule.forChild(PostNeeds),
  ],
  exports: [
    PostNeeds
  ]
})
export class PostNeedsModule {}
