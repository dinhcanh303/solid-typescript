abstract class Adapter {
    abstract request<T>(url: string): Promise<T>
    // code shared to subclass
}

class RestApiAdapter extends Adapter {
    constructor() {
        super();
    }
    async request<T>(url: string): Promise<T>{
        //request and return promise
    }
}

class GraphQLAdapter extends Adapter {
    constructor() {
        super();
    }
    async request<T>(url: string): Promise<T>{
        //request and return promise
    }
}

class HttpRequester {
    constructor(private readonly adapter: Adapter) {
        
    }
    async fetch<T>(url: string): Promise<T>{
        const response = await this.adapter.request<T>(url);
        //transform response and return 
    }
}