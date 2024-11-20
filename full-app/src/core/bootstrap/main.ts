import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../../config/app';
import { RootComponent } from './root.component';

bootstrapApplication(RootComponent, appConfig)
  .catch((err) => console.error(err));
