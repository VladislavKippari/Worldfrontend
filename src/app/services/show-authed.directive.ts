import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { UserService } from '../services/user.service';

@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
  ) { }

  condition: boolean;
temp:string;
  ngOnInit() {
    this.temp=window.localStorage['logg']|| "false";
    if(this.temp.includes("true")){
      this.condition=true;
      console.log(window.localStorage['roleid']);
    }
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

}
//код выше позволяет отображать меню в зависимости от роли пользователя