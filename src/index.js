/**
 *
 * @description:
 * @author: junyong.hong
 * @createTime: 2020/4/23
 * @version: 1.0.0.0
 * @history:
 *    1、
 *    2、
 *
 */
class FastCache{
    constructor() {
        this.list = {}
    }
    set(key, value) {
        this.list[key] = value
    }
    get(key) {
        return this.list[key]
    }
}

window.FastCache = FastCache