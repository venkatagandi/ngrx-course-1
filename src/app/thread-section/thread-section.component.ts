import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { LoadUserThreadsAction } from 'app/store/actions';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService, private store:Store<ApplicationState>) {
      store.subscribe(state => console.log('thread section component received the state',state));
  }



  ngOnInit() {

         this.threadsService.loadUserThreads()
         .subscribe(
           allUserData => this.store.dispatch(new LoadUserThreadsAction(allUserData))
         );

  }

}
