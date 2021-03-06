import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

//App
import {MyApp} from './app.component';

//Modules
import {Ionic2RatingModule} from 'ionic2-rating';
import {Camera} from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import {MediaCapture} from '@ionic-native/media-capture';
import {IonicStorageModule} from '@ionic/storage';

//Services
import {AuthService} from "../services/auth.service";
import {TaskService} from "../services/task.service";
import {UserService} from "../services/user.service";
import {FileService} from "../services/file.service";

//Pages
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {RoleChoicePage} from "../pages/role-choice/role-choice";
import {CoachDashboardPage} from "../pages/coach-dashboard/coach-dashboard";
import {StudentDashboardPage} from "../pages/student-dashboard/student-dashboard";
import {DashboardPopoverPage} from "../pages/dashboard-popover/dashboard-popover";
import {CoachTaskPage} from "../pages/coach-task/coach-task";
import {CreateTaskPage} from "../pages/create-task/create-task";
import {StudentTaskPage} from "../pages/student-task/student-task";
import {TaskPopoverPage} from "../pages/task-popover/task-popover";
import {SettingsPage} from "../pages/settings/settings";
import {NotificationPage} from "../pages/notification/notification";
import {InviteService} from "../services/invite.service";
import {StudentService} from "../services/student.service";
import {CoachService} from "../services/coach.service";
import {StudentTaskTextModalPage} from "../pages/student-task-text-modal/student-task-text-modal";
import {NotificationService} from "../services/notification.service";
import {ProfilePage} from "../pages/profile/profile";
import {EditProfileModalPage} from "../pages/edit-profile-modal/edit-profile-modal";
import {TaskTemplatesPage} from "../pages/task-templates/task-templates";
import {CoachSendTaskModalPage} from "../pages/coach-send-task-modal/coach-send-task-modal";
import {StatisticsPage} from "../pages/statistics/statistics";
import {DashboardStudentPopoverPage} from "../pages/dashboard-student-popover/dashboard-student-popover";
import {StartSliderPage} from "../pages/start-slider/start-slider";
import {ImpressumPage} from "../pages/impressum/impressum";
import {TaskChatPage} from "../pages/task-chat/task-chat";
import {StudentTaskVoiceModalPage} from "../pages/student-task-voice-modal/student-task-voice-modal";
import {StudentTaskImageModalPage} from "../pages/student-task-image-modal/student-task-image-modal";
import {StudentTaskVideoModalPage} from "../pages/student-task-video-modal/student-task-video-modal";
import {WatchMediaModalPage} from "../pages/watch-media-modal/watch-media-modal";


@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    RoleChoicePage,
    CoachDashboardPage,
    StudentDashboardPage,
    DashboardPopoverPage,
    CoachTaskPage,
    CreateTaskPage,
    StudentTaskPage,
    TaskPopoverPage,
    SettingsPage,
    NotificationPage,
    StudentTaskTextModalPage,
    StudentTaskVoiceModalPage,
    StudentTaskImageModalPage,
    StudentTaskVideoModalPage,
    WatchMediaModalPage,
    ProfilePage,
    EditProfileModalPage,
    TaskTemplatesPage,
    CoachSendTaskModalPage,
    StatisticsPage,
    DashboardStudentPopoverPage,
    StartSliderPage,
    TaskChatPage,
    ImpressumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    }),
    Ionic2RatingModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    RoleChoicePage,
    CoachDashboardPage,
    StudentDashboardPage,
    DashboardPopoverPage,
    CoachTaskPage,
    CreateTaskPage,
    StudentTaskPage,
    TaskPopoverPage,
    SettingsPage,
    NotificationPage,
    StudentTaskTextModalPage,
    StudentTaskVoiceModalPage,
    StudentTaskImageModalPage,
    StudentTaskVideoModalPage,
    WatchMediaModalPage,
    ProfilePage,
    EditProfileModalPage,
    TaskTemplatesPage,
    CoachSendTaskModalPage,
    StatisticsPage,
    DashboardStudentPopoverPage,
    StartSliderPage,
    ImpressumPage,
    TaskChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UserService,
    TaskService,
    InviteService,
    StudentService,
    CoachService,
    NotificationService,
    FileService,
    Camera,
    File,
    MediaCapture
  ]
})
export class AppModule {
}
