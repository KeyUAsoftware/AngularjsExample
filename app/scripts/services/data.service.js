class DataService {
  constructor($http, $q) {
    'ngInject';

    this._http = $http;
    this._q = $q;
  }

  getData(url) {
    let def = this._q.defer();
    this._http.get(url).then((res) => {
      def.resolve(res.data);
    }, (error)=>{
      def.reject(error);
    });
    return def.promise;
  }
}
export default DataService