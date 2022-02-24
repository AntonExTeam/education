/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {

    subscribers = [];
    constructor(token) {
        this.token = token;
    }

    subscribe(notify) {
        return this.subscribers.push(notify);
    }

    notify() {
        return this.subscribers.forEach(item => {
            item(this.token);
        })

    }

    removeToken() {
        this.token = null;
        this.notify();
    }

    getToken() {
        return this.token;
    }

    setToken(token) {
        this.token = token;
        this.notify();
    }
}

window.TokenService = TokenService;

export default TokenService;
