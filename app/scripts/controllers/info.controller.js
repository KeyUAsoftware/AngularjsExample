var _data = new WeakMap();
var _stateParams = new WeakMap();
var _sce = new WeakMap();
var _uibModal = new WeakMap();

class InfoCtrl {
  constructor(DataService, $stateParams, $sce, $uibModal) {
    'ngInject';

    _data.set(this, DataService);
    _stateParams.set(this, $stateParams);
    _sce.set(this, $sce);
    _uibModal.set(this, $uibModal);

    this.onInit();

  }

  onInit() {
    let index = _stateParams.get(this).id;
    _data.get(this).getData('local.json').then((res) => {
      this.videos = res[index].videos;
    }, (error) => {
      console.warn(error);
    })
  }

  getTrusedUrl(url) {
    let video_id = url.split('v=')[1].split('&')[0];
    return _sce.get(this).trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
  }

  addVideo() {
    _uibModal.get(this).open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/add-video.html',
      controller: 'AddVideoCtrl as addctrl',
      size: 'md',
    }).result.then((res) => {
      this.videos.push(res);
    }, () => {
    })
  }


}

export default InfoCtrl;
