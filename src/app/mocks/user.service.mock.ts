import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceMock {
  constructor() { }

  getUsers(): Array<{}> {
      return [
          {
              name: 'user1',
              surname: 'usersurname1'
          }
      ];
  }
}
