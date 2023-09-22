class User {
    email: string;
    password: string;
    name: string;
    constructor({
        email, 
        password,
        name}) {
        this.email = email,
        this.password = password,
        this.name = name
    }
}
class UserAuth{
    constructor(private readonly user: User) {
        
    }
    verifyCredentials(): boolean {
        //do something
        return false;
    }
}
class UserSettings{
    private readonly auth: UserAuth;

    constructor(private readonly user:User) {
        this.auth = new UserAuth(user);
    }

    changeSettings(settings: UserSettings) {
        if(this.auth.verifyCredentials()){
            // do something
        }
    }
}