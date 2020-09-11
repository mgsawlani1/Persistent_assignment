import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppRoutingModule } from '../app-routing.module';
import { ImagesService } from '../core/services/images.service';
import { AddEditComponent } from '../images/addEdit/add-edit.component';
import { ImagesListComponent } from '../images/images.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { reducers } from '../store/app.state';
import { AuthEffects } from '../store/effects/auth.effects';
import { HeaderComponent } from './header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        HeaderComponent,
        LoginComponent,
        ImagesListComponent,
        AddEditComponent,
        SignUpComponent,
      ],
      imports: [
        AppRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot(reducers, {}),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ImagesService],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});
export const header = Template.bind({});
header.args = {
  user: {},
  isAuthenticated: true,
};

// export const ActionOnly = () => ({
//   component: LoginComponent,
//   props: {
//     text: 'login Action',
//     onClick: action('log 1'),
//   },
// });

// export const ButtonWithLinkToAnotherStory = () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Register'),
//   },
// });

// ButtonWithLinkToAnotherStory.story = {
//   name: 'button with link to another story',
// };
