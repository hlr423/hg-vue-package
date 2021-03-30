import Pagination from './pagination';
const pagination = {
  install:function (Vue) {
    Vue.component('hgPagination',Pagination)
  }
};
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(pagination)
}
export default pagination
