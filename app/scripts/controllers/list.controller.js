var _data = new WeakMap();

class ListCtrl {
  constructor(DataService) {
    'ngInject';

    _data.set(this, DataService);

    this.onInit();

  }

  onInit() {
    _data.get(this).getData('local.json').then((res)=>{
      this.list = res;
    }, (error) =>{
      console.warn(error);
    })
  }


}

export default ListCtrl;
