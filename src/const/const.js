// const _login_url = 'http://ec2-13-112-26-5.ap-northeast-1.compute.amazonaws.com/hypermemo/'
// const _getuser_url = 'http://ec2-13-112-26-5.ap-northeast-1.compute.amazonaws.com/hypermemo/api/v1/login'
// const _logout_url = 'http://ec2-13-112-26-5.ap-northeast-1.compute.amazonaws.com/hypermemo/logout'

const _login_url = 'http://localhost:8082/hypermemo/'
const _getuser_url = 'http://localhost:8082/hypermemo/api/v1/login'
const _logout_url = 'http://localhost:8082/hypermemo/logout'
const _urls = []
_urls.push(_login_url, _getuser_url, _logout_url)
export default {
    data() {
        return {
            url: _urls
        };
    },
};