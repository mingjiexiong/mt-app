export default {
    dbs: 'mongodb://127.0.0.1:27017/meituan',
    redis: {
        get host() {
            return '127.0.0.1';
        },
        get post() {
            return 6379;
        }
    },
    smtp: {
        get host() {
            return 'smtp.qq.com';
        },
        // get post() {
        //     return 587;
        // },
        get user() {
            return '1284883526@qq.com';
        },
        get pass() {
            return 'ppdcrjyxnndeifed';
        },
        get code() {
            return () => {
                return Math.random().toString(16).slice(2, 6).toUpperCase();
            };
        },
        get expire() {
            return () => {
                return new Date().getTime() + 60 * 60 * 1000;
            };
        }
    }
};
