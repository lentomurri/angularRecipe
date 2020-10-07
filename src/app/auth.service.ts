export class AuthService {
  loggedIn = false;

  isAuthenticated(): any {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 200 );
      }
    );
    return promise;
  }

  login(): void {
    this.loggedIn = true;
  }
  logout(): void {
    this.loggedIn = false;
  }
  }
