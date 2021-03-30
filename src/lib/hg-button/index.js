import hgButtonComponent from './hg-button';
const hgButton = {
  install:function (Vue) {
    Vue.component('hgButton',hgButtonComponent)
  }
};
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(hgButton)
}
export default hgButton
