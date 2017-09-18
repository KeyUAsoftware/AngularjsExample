var _instance = new WeakMap();

class AddVideoCtrl {
  constructor($uibModalInstance) {
    'ngInject';

    _instance.set(this, $uibModalInstance);

    this.onInit();

  }

  onInit() {
    this.video = {
      title: "",
      description: "",
      link: ""
    }
  }

  close() {
    _instance.get(this).dismiss();
  }

  add() {
    _instance.get(this).close(this.video);
  }


}

export default AddVideoCtrl;
