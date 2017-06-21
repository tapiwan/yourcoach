import firebase from 'firebase';
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {Events} from "ionic-angular";
import {UserService} from "./user.service";

@Injectable()
export class CoachService {
  nodeName: string = '/pairings/';

  coaches: any[] = [];

  constructor(private authService: AuthService,
              private userService: UserService,
              private events: Events) {
    this.observeCoaches();
  }

  /**
   * Get coaches
   */
  getCoaches() {
    return this.coaches.slice();
  }

  /**
   * Observe all coaches from student
   */
  observeCoaches() {
    let uid = this.authService.getActiveUser().uid;

    let query = firebase.database()
      .ref(this.nodeName)
      .orderByChild('student')
      .equalTo(uid);

    query.on('value', snapshot => {
      let dbPairings = snapshot.val();
      let coaches: any[] = [];

      for (let pairingId in dbPairings) {
        let pairing = dbPairings[pairingId];

        this.userService.getUserRefById(pairing.coach).once('value', user => {
          let newCoach = user.val();
          if(newCoach !== null){
            newCoach._id = pairing.coach;
            newCoach.pairingId = pairingId;

            if (!pairing.deleted && !newCoach.deleted) {
              coaches.push(newCoach);
            }
          }
        })
      }

      //Update state
      this.coaches = coaches;
      this.events.publish('coaches:changed', this.coaches);
    });
  }

  /**
   * Delete coach from student
   *
   * @param pid Pairing ID
   */
  deleteCoach(pid: string) {
    firebase.database().ref(this.nodeName + pid).update({
      deleted: true
    }).then(data => {
      this.events.publish('coaches:delete-success', {
        message: 'Coach wurde gelöscht'
      });
    }, error => {
      this.events.publish('coaches:delete-failed', {
        message: error.message
      });
    });
  }
}
